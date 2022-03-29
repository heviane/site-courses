# Conteiners

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
    => CLASSE => IMAGEM
    => OBJETO => CONTAINER
    **Container é criado a partir de uma imagem**
    O container é a materialização de uma imagem.
    => IMAGEM => IMUTÁVEL
    Se matar um container existente (já modificado), e criá-lo novamente, ele virá zerado.
    Porque quando um container é destruído, todo o seu conteúdo é perdido.

## Plataformas 💻

- Plataformas Open Sources que constroem e gerenciam conteiners:
  - [Kubernetes](https://kubernetes.io): Ambiente de produção.
  - [Docker](https://www.docker.com): Ambiente de desenvolvimento e produção.

### Docker

#### Docker CLI

```bash
    #!/bin/bash

    docker -v

    ## Somente conatiners ativos
    docker ps 
    docker container ls
    ## Todos os containers (arg -a)
    docker ps -a 
    docker container ls -a
    
    docker clear
    
    ## Cada vez que executamos "run" criamos um novo container 
    docker run nginx 
    docker run --name=server nginx:latest  ### porta default 80
    curl localhost:80 ## ERROR: Porque a porta 80 do container não é a mesma porta 80 da máquina 
                    ## O container tem uma rede independente da máquina local 
    exit # Para sair da execução
    
    ## É necessário publicar o container (arg -p) e mapear a porta 8080 local com a porta 80 do nginx
    docker run --name=server2 -p 8080:80 nginx:latest
    curl localhost:8080 ## SUCESS: Quando acessamos a porta 8080 da máquina, caímos na porta 80 do container

    ## exec para executar comandos dentro do container
    ## -it para poder interagir dentro do container, digitar comandos, porque o bash apenas executa o terminal 
    ## server-nginx-2 é o nome do container
    ## bash é para executar no terminal do container
    docker exec -it server-nginx-2 bash
        # root@5cf0c9baf48b:/#
        exit # Comando para sair do terminal do container

    # Mata todos os containers
    sudo docker rm $(sudo docker ps -aq) -f
```

#### docker HUB

Repositório de imagens.
Cada usuário pode ter seu próprio repositório.

## References ✅

- [Docker: O que todo dev precisa saber](https://www.youtube.com/watch?v=U8e3kqrQrpY)
14m41s...inicio da explicação
57m16s...se matar o container perde o projeto, então, como trabalhar?
- [Configurando o melhor ambiente de desenvolvimento](https://www.youtube.com/watch?v=O0HqVNkzY1Q)
