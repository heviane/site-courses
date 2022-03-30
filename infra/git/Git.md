# Formas de interagir com Git:
- Modo GUI (Graphical User Interface): Marcar a opção "Git GUI Here" durante a instalação.
	**GitHub Desktop** é um cliente Git, opção gratuíta.
	**GitKraken** é um cliente Git, opção gratuíta somente para repositórios públicos.

- Modo CLI (Command Line Interface): Marcar a opção "Git Bash Here" durante a instalação.
	**Git Bash** é um terminal extendido para otimizar o uso do Git.

## Git é um sistema seguro e distribuído
Para entendermos o porquê de ser seguro e distribuído, precisamos entender o funcionamento por debaixo dos panos. 
Precisamos entender como os arquivos são manipulados pelo Git.
Git usa o algoritmo de **Hash Seguro SHA1 (Secure Hash Algorithm)** para encriptar os arquivos.

### Encriptação com o sha1
O algoritmo Sha1 embaralha o dado de uma forma muito especifica.
Essa encriptação gera (output) um conjunto ÚNICO de caracteres identificador de 40 digitos. 
A grosso modo este identificador é uma forma curta de representar um estado de um arquivo.

- **Exemplo de como verificar o sha1 de um arquivo**
	> $ openssl sha1 readme.md
	>
	> > SHA1(readme.md)= 8c2741c734173017dede8500be1862113607eb6b
	
- **Exemplo de encriptação de uma string** 
    > $ echo 'teste' | openssl sha1
    >
    > > (stdin)= 9dc628289966d144c1a5fa20dd60b1ca1b9de6ed 
	
    > $ echo 'teste.' | openssl sha1
    >
    > > (stdin)= 596ab069ed3b127f59d70c00abffdb84b71ac030

Podemos observar, que nos dois exemplos, o output diferente, pois a entrada não está exatamente igual.
No segundo comando, adicionamos o ponto-final.
    
- **Exemplo de encriptação de uma string com o Git**
    > $ echo 'teste' | git hash-object --stdin
    >
    > > 6f16acbbc80d444145a09d897a93591cd806d3f8

Podemos observar, que o output gerado com o Git é diferente do output gerado sem o Git. 
Isso acontece porque o Git manipula dados através de objetos.
Esses objetos possuem metadados. Então o Git junta o DADO + METADADO para encriptar.
    
- **Exemplo de encriptação de uma string SEM o Git e adaptando para incluir os metadados**
    > $ echo -e 'blob 6\0teste' | openssl sha1
    >
    > > (stdin)= 6f16acbbc80d444145a09d897a93591cd806d3f8 
    

Podemos observar, que nos dois últimos exemplos, o output é igual, pois adaptamos para encriptar do mesmo modo que o Git faz.

### Objetos internos
Os três tipos básicos de objetos responsáveis pelo versionamento (Blob, Tree, Commit).
O Git usa objetos e dentro destes objetos ele armazena os dados e os metadados.
- ***Blobs (Bolhas)***
        Blob é o objeto base, é como o git manipula os arquivos.
        Cada blob armazena um arquivo e o seu código identificador sha1
        **Metadados:** blob, tamanho, "\0", dado (arquivo + sha1).
- ***Trees (Árvores)***
        Tree é o objeto que armazena o objeto blob (então é uma crescente, onde Blob é o bloco básico da composição).
        Esse objeto é responsável por montar toda a estrutura de onde estão localizados os arquivos.
        Tree armazena e aponta para tipos de blobs diferentes, para outras Trees e para os commits.
        São objetos recursivos, assim podemos ter uma tree apontando para outra tree (Como nos diretórios).
        **Metadados:** tree, tamanho, "\0", apontamento para blob + sha1, conteúdo, nome do arquivo.
- ***Commits (Comprometer-se)***
        Commit é o objeto que vai juntar tudo, que vai dar sentido para a alteração.
		Commit armazena todas as fotos das versões atuais de todos os arquivos.
        **Metadados:** commit, tamanho, tree, parente, autor, mensagem, Timestamp.
            Parente é o último commit realizado, precisa dessa informação para montar uma linha do tempo.
            Timestamp é um carimbo de tempo contendo data e hora da criação do objeto.

**OBS:** A minima alteração em um arquivo irá modificar toda a estrutura relacionada aquele objeto. 

### Ciclo de Vida dos Arquivos
- **Untracked**
	São os arquivos desconhecidos pelo git (não-rastreáveis).
	
- **Tracked**
	São os arquivos conhecidos pelo git (rastreáveis), é um ciclo que se divide em 3 estágios.
	- **Unmodified:** Ainda não modificado.
	  São os arquivos recém criados ou já commitados (sem modificações).
	
	- **Modified:** Já modificado.
	
	  São os arquivos que foram modificados (estão diferentes do servidor)
	
	  Compara os arquivos através do sha1 para determinar se é unmodified ou modified.
	
	- **Staged:** Staging Area.
		São os arquivos modified que estão esperando pelo commit, são adicionados através do comando:
	
		>	$ git add . 
		
		Após a realização do commit, todos os arquivos retornam para unmodified.
		Os arquivos podem ser removidos da Staging Area (do commit) através do comando:
		
		>	$ git restore --staged nomeDoArquivo 

### Ambientes (GIT tem uma versão no servidor e as versões locais)
Por isso Git é considerado um sistema distribuído.
- **Ambiente de Desenvolvimento LOCAL**
	Versão do Git local. Pode existir N versões (Uma versão para cada usuário)
	- **Working Directory:** Untracked
	- **Staging Area:** Tracked (Unmodified e Modified)
	- **Local Repository:** Tracked (Commits realizados)
		Repositório local é inicializado através do comando:
		
		>	$ git init
		
		Repositório local é composto pelos **commits**, que é realizado através do comando:
		
		>	$ git commit -m "mensagem explicativa"
		
		Após commit, Repositório local pode ser empurrado para Repositório remoto através do comando:
		
		> 	$ git push origin main

- **Ambiente de Armazenamento REMOTO (GitHub)**
	Versão do Git no servidor. Sempre vai existir uma única versão.
	- **Remote Repository:** 
		Clonar repositório remoto para o repositório local (caso não exista) através do comando:
		
		>	$ git clone git@github.com:heviane/dio-desafio-github.git
	
		Apontar Local Repository to Remote Repository (se criados individualmente) através do comando:
		
		> 	$ git remote add origin git@github.com:heviane/NameRepository
		
		**origin** é apenas um alias para o endereço do repositório.
		
		Repositório remoto pode ser puxado para o repositório local através do comando:
		
		>	$ git pull origin main
		
		**main** é a branch (TAGs (ramificações) apontando para algum ponto no histórico)
	
- **Merge e conflitos**
	Git sempre tenta realizar o merge (junção dos códigos: servidor X local) de modo automático.
	Quando não for possível, ele informa sobre a existência de conflitos. 
		Exemplo: Alteração na mesma linha de código.
	Quando houver conflitos, cabe ao usuário resolvê-los manualmente e realizar um commit para resolvê-lo.

## Comunicação e Autenticação
- ### Chave SSH
  Fornece uma comunicação segura e encriptada entre duas máquinas.
  A conexão sempre vai ser estabelecida com duas chaves.
  - A **chave pública** vai ser exposta no GitHub.
  - A **chave privada** vai ficar armazenada na máquina local.

	Como gerar e configurar as chaves?
	
	- #### Como gerar uma chave SSH?
		- No Git Bash executar o comando:
		  
		  > $ ssh-keygen -t ed25519 -C endereco@email.com
		  >> Generating public/private ed25519 key pair.
		  >> Enter file in which to save the key (/c/Users/hevia/.ssh/id_ed25519):
		  
		
		**ed25519** é o tipo de criptografia da chave.
		- Navegue até o diretório oculto onde foram armazenadas as chaves:
		  
		  > $ cd .ssh/
		- Listar este diretório onde estará as duas chaves criadas, uma pública e uma privada:
		  > $ ls
		  >
		  > > id_ed25519  id_ed25519.pub
		- Exponha o conteúdo da chave pública:
		  > $ cat id_ed25519.pub
		  >
		  > > ssh-ed25519 BBBBC3NzaC1lZDI1NTE5AAAAIFnZsaUNkoyX7xqNu4NrmEqOXvlJps5jHqK3cdDQ81v/ endereco@email.com
		- Pronto! Já temos a chave pública para adicionar no Github.
		
	- #### Como configurar a chave pública no GitHub?
		- Acessar GitHub em https://github.com/
		- Clicar na foto de perfil
		- Selecionar a opção: Settings
		- Selecionar a opção: SSH Keys
		- Clicar botão: New SSH Key
		
	
	**OBS:** É possível adicionar várias chaves.
	
	- #### Como configurar a chave SSH na sua máquina local?
		- No Git Bash executar o comando para inicializar a entidade que vai gerenciar as chaves na sua máquina:
		  > $ eval $(ssh-agent -s)
		  >
		  > > Agent pid 1382
		- Comando para passar ao agente a chave privada:
		  
		  > $ ssh-add id_ed25519

_Ao contrário do Token, este modo não ficará solicitando as credenciais a cada operação_.

- ### Token
	O token é de uso pessoal e se assemelha a uma senha de login.

	- #### Como gerar um Token no GitHub?
		- Acessar o GitHub em https://github.com/
		- Clicar na foto de perfil
		- Selecionar opções: Settings/Developer Settings/Personal access tokens/
		- Clicar no botão: Generate new token

O token será visualizado somente no momento da geração, portanto, deve ser copiado e armazenado em local seguro para posterior utilização.
_Ao contrário do SSH, este modo ficará solicitando as credenciais (usuário e token) a cada operação._