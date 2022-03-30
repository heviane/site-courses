# Criando uma nova imagem baseada na imagem do nginx
FROM nginx:latest

# Criando o mapeamento do dir local com o dir do container
COPY html/index.html /usr/share/nginx/html

# Executando comandos, neste caso, instalando o editor de texto vim
RUN apt update && apt install -y vim
