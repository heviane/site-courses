

ls (Listar as pastas) <br>
cd .. (voltar um diretório) <br>
CD: <br>
dir / tree /f (ver o que tem dentro da pasta) <br>
mkdir (nome da pasta) - criar novos diretórios/pastas <br>
git status (Verifica o status do repositório) <br>
git add -A (Trackear o que não foi trackeado, inserir tudo) <br>
git commit -m (Para commitar) / git commit -am <br>
[Diferença do commit -m para o git commit -am](https://pt.stackoverflow.com/questions/344986/diferen%C3%A7a-do-git-commit-am-e-m) <br>
git log (lista de commits) <br>
git reset (--soft / --mixed / --hard) <br>
git checkout (Mudar a branch atual) <br>
git diff (Checar o que houve nas alterações) / git diff --name-only / git diff //nome do arquivo// (vê apenas a alteração feita naquele arquivo) <br>
git checkout HEAD -- "diff" //nome do arquivo// (retroceder até a posição) <br>
git push origin <link> <br>
git pull origin <link> <br>
git clone <link> <br>

Configurações iniciais do Git <br>

Baixando e instalando o Git <br>
[Site para instalar o Git](https://git-scm.com/downloads) <br>

Configura nome de usuário: <br>
git config --global user.name <br>

Configura email de usuário: <br>
git config --global user.email email@email.com.br <br>

Inicializando um repositório <br>

Inicializa o versionamento no respectivo diretório: <br>
git init <br>

Comandos básicos para sobreviver: <br>

Verificando o status do repositório: <br>
git status <br>

Adicionando todos os arquivos para serem commitados: <br>
git add . / git add -A <br>

Commitando arquivos: <br>
git commit -m "inserir um comentário significativo" <br>

Visualizando relatório de commits: <br>
git log // todos os commits <br>
git log --oneline // exibe log com hash e título do commit <br>

Adicionando um repositório remoto: <br>
git remote add origin https://github.com/User/Repository.git <br>

Enviando as modificações para o repositório remoto: <br>
git push origin <branch> <br>

Puxando alterações do repositório remoto: <br>
git pull origin <branch> <br>

Trabalhando com branches: <br>
git checkout -b nome-branch <br>

Aplicando merge em branches: <br>
git merge nome-branch // precisa estar na branch de destino <br>

Visualizando todas as branches existentes no repositório: <br>
git branch <br>

Deletando uma branch local: <br>
git branch -D nome-branch <br>
git branch -d nome-branch <br>

Deletando uma branch remota: <br>
git push origin :nome-branch <br>

Deletando todas branch que não se encontram no repositório remoto: <br>
git branch --merged ## <br>
git branch -r | egrep -v -f /dev/fd/0 <(git branch -vv | grep origin | grep -v "master") | xargs git branch -d <br>

Deletando todos branches no repositório local (exceto a master): <br>
git branch | grep -v "master" | xargs git branch -D <br>
