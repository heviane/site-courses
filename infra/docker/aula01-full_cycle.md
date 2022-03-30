# Conteinerização

- Quando subimos uma **máquina virtual (VM)**
  - Precisamos instalar o SO
  - Sequestramos o poder computacional da máquina local
  - Não é rápido para montar um ambiente
  - Não são flexíveis

- Quando subimos um **Conteiner (é um conceito)**
  - Não é uma VM, é apenas um processo isolado rodando na máquina (mais leve que VM).
  - É um ambiente isolado, pacote fechado, sem acesso para fora.
    App roda isolada da máquina e SO hospedeiros, não sequestra poder computacional.
  - Permiti criar ambiente local exatamente igual ao ambiente de produção.
  - Permiti realizar instalações somente no container.

    - **Analogia**:
    CLASSE = IMAGEM
    OBJETO = CONTAINER
    **Container é criado a partir de uma imagem**. O container é a materialização de uma imagem.
    A IMAGEM é IMUTÁVEL
    Se matar um container existente (já modificado), e criá-lo novamente, ele virá zerado.
    PorquAe quando um container é destruído, todo o seu conteúdo é perdido.

## Plataformas 💻

- Plataformas Open Sources que constroem e gerenciam conteiners:
  - [Docker](https://www.docker.com): Ambiente de desenvolvimento e produção.
  - [Kubernetes](https://kubernetes.io): Ambiente de produção. Vai além do docker.

### Docker: Containers

- Criar, listar e deletar containers.

```bash
    #!/bin/bash

    docker -v

    ## Somente containers ativos
    docker ps 
    docker container ls
    ## Todos os containers (arg -a)
    docker ps -a 
    docker container ls -a
    
    docker clear
    
    ## Criando um container com "run" 
    docker run nginx 
    docker run --name=server nginx:latest  ### porta default 80
    curl localhost:80 ## ERROR: Porque a porta 80 do container não é a mesma porta 80 da máquina 
                    ## O container tem uma rede independente da máquina local 
    exit # Para sair da execução
    
    ## É necessário publicar o container (arg -p) e mapear a porta 8080 local com a porta 80 do nginx
    ## arg -d deixa o container rodando em background
    docker run -d --name=server2 -p 8080:80 nginx:latest
    curl localhost:8080 ## SUCESS: Quando acessamos a porta 8080 da máquina, caímos na porta 80 do container            

    ## exec para executar comandos dentro do container
    ## -it para poder interagir dentro do container, digitar comandos, porque o bash apenas executa o terminal 
    ## server-nginx-2 é o nome do container
    ## bash é para executar no terminal do container
    docker exec -it server-nginx-2 bash
        # root@5cf0c9baf48b:/#
        exit # Comando para sair do terminal do container

    # Matando todos os containers
    docker rm $(sudo docker ps -aq) -f
```

### Docker: Volumes

- São os diretórios locais compartilhados com o container.
É necessário realizar o mapeamento do diretório local para o diretório do container.
Quando o container for deletado (Tudo dentro dele se perde), os arquivos do projeto continuarão existindo na máquina local.

Sendo assim, podemos deletar e subir o container novamente quantas vezes forem necessárias, porque o projeto estará seguro em nosso máquina local, e basta-rá o mapeamento das pastar para executarmos o projeto via container.

```bash
    #!/bin/bash

    ## Mapeando dir do container com dir da máquina local
    docker run --name=server2 -v $(pwd)/docker/html:/usr/share/nginx/html -p 8080:80 nginx
        ## O comando pwd retorna o dir atual local
        ## /usr/share/nginx/volume é o dir do container

    ## Deletando o container
    docker rm -f 4c424623afa2

    ## Subindo novamente o container
    docker run --rm -v $(pwd)/docker/html:/usr/share/nginx/html -p 8080:80 nginx
    ### --rm serve para matar o container automaticamente quando apertamos CTRL + C para parar a execução
```

### Docker: Imagem

A imagem é a base para a criação do container.

- Como criar a própria imagem?
- **Dockerfile** é a receita para a criação da imagem.
O docker vai executar tudo que estiver neste arquivo, passo a passo, para criar uma imagem.

```bash
    #!/bin/bash

    # Criando uma nova imagem baseada na imagem do nginx, conforme as instruções do Dockerfile
    ## A imagem é gerada localmente
    docker build -t heviane/nginx-heviane:latest .
        ## build é o comando para contruir a imagem
        ## -t 
        ## heviane é o username no docker hub (https://hub.docker.com)
        ## nginx-heviane é o nome do novo container
        ## . é o caminho do arquivo Dockerfile (neste caso, no mesmo dir onde estamos digitando os comandos)

    # Subindo a imagem gerada localmente para o docker hub (https://hub.docker.com)
    docker push heviane/nginx-heviane:latest
        ## Necessário realizar o login antes *** Será solicitado o password, que é o token ***
        docker login -u heviane

    # Criando um container baseado na nova imagem
    docker run -p 8080:80 heviane/nginx-heviane
```

Para atualizar uma imagem existente, é necessário seguir os mesmos passos da criação da imagem:

- build
- push
- run

Alterei o arquivo local (./html/index.html) e não se refletiu na app. Executei os passos acima, e aí sim subiu a app com as alterações realizadas. Ou seja, foi necessário atualizar (construir) uma nova imagem e subir para o repositório.

### Docker Compose

- **docker-compose.yml**: Basicamente, é um manifesto.
Ferramenta para auxiliar na execução de comandos.

Colocarmos neste arquivo todos os comandos necessários durante a criação do container, assim não é necessário ficar digitando-os novamente toda vez. Basta executar um único comando para o docker compose.

```bash
    #!/bin/bash

    ## Criando um container automaticamente (equivale ao comando docker run para criar/subir o container)
    docker-compose up
    docker-compose up -d 
        ## -d serve para rodar em background (não fica com o terminal travado)

    # Incluído banco de dados "mysql" na app
    docker-compose exec mysql bash
        ## exec para executar comandos dentro do container
        ## mysql é o serviço que queremos acessar
        ## bash é o tipo de terminal que queremos
            ### Estamos dentro do container 
            ### root@6b81ba2e8d0c:/#
            mysql -uroot -p
                #### Estamos dentro do MySql
                #### mysql>
                USE test;
                CREATE TABLE user (login VARCHAR (255), name VARCHAR(255), email VARCHAR (255)); 
                DESC user;
                INSERT INTO user VALUES ('heviane','Heviane Bastos','heviane@gmail.com');
                INSERT INTO user VALUES ('maria','Maria Bastos','maria@gmail.com');
                SELECT login, name, email FROM user;

    # Criado app em go "./docker/app"
    docker-compose up -d
    docker-compose exec app bash
        ## root@d3d2ffef7917:/go/src#
        ls
        go mod init example
        go mod tidy
        go get github.com/go-sql-driver/mysql
        go run main.go
        # ERROR: ./main.go:15:5: db.query undefined (type *sql.DB has no field or method query, but does have Query)

    # Parando todos os containers
    docker-compose down
```

#### [docker hub](https://hub.docker.com)

Repositório de imagens.
Cada usuário pode ter seu próprio repositório.

## References ✅

- Aulas
  - [Docker: O que todo dev precisa saber](https://www.youtube.com/watch?v=U8e3kqrQrpY)
  - [Configurando o melhor ambiente de desenvolvimento](https://www.youtube.com/watch?v=O0HqVNkzY1Q)

- Repositórios do Github
  - [wsl2-docker-quickstart](https://github.com/codeedu/wsl2-docker-quickstart)
  - [ambiente-dev-produtivo](https://github.com/argentinaluiz/ambiente-dev-produtivo)
