# Java - installation and configuration

- Comando para listar as versões do java:

`update-alternatives --list java`

- Comandos para verificar se o java está instalado:

`java -version`

`javac -version`

- Comando para consultar a variável de ambiente **JAVA_HOME**:

`printenv JAVA_HOME`

- Comando para instalação do Java (**default-jdk** especifica a última versão disponivel):

`sudo apt install default-jdk`

- Comando **which** para descobrir a localização do java (gera link simbólico):

`which javac`

/usr/bin/javac

- Comando **readlink** para seguir link simbólico:
Isso é chamado de substituição de comando e substitui o comando com sua saída. 
Então, basicamente, o comando acima é equivalente a `readlink -f /usr/bin/java` neste caso.

`readlink -f $(which java)`

/usr/lib/jvm/java-17-openjdk-amd64/bin/java

- Comandos **export** e **echo** para definir a variável ‘permanentemente’:

`export JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64`
`echo $JAVA_HOME`

- Comando **cp** para copiar arquivos ou diretórios, para fazer backup do arquivo bashrc:

`cp ~/.bashrc ~/.bashrc.bak`

- Comando **echo** para anexar o comando de exportação no arquivo bashrc:

`echo "export JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64" >> ~/.bashrc`

- Comando **tail** mostrará as últimas linhas do arquivo especificado:

`tail -3 ~/.bashrc`

# References

* [livreeaberto.com/definindo-java-home-no-ubuntu](https://livreeaberto.com/definindo-java-home-no-ubuntu)