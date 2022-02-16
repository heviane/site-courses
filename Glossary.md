# Glossary :world_map:

Termos relacionados a engenharia de software.

## Convenção de nomeação padrão

- **Camel Case** é a prática de escrever palavras compostas ou frases de modo que cada palavra ou abreviatura no meio da frase comece com uma letra maiúscula.
	- Exemplos: “iPhone”, “eBay”.
	
- **Pascal Case** é a prática de escrever palavras compostas ou frases de modo que cada palavra ou abreviatura comece com uma letra maiúscula.
	- Exemplos: “FedEx” e “HarperCollins”

Ambas não utilizam espaços nem pontuação e são muito utilizadas na programação.
Não é obrigatório, por isso, é chamado de convenção.

## Snippet

Snippet é um termo de programação para uma pequena região de código-fonte reutilizável, código de máquina ou texto. 
Normalmente, essas são unidades operacionais formalmente definidas para incorporar em módulos de programação maiores. 
O gerenciamento de snippet é um recurso de alguns editores de texto, editores de código-fonte de programas, IDEs e softwares relacionados.

Snippets são blocos de códigos que podem ser utilizados para ajudar a agilizar o trabalho do desenvolvedor.
A ideia é facilitar a utilização de fragmentos de códigos repetitivos em diversas partes da aplicação que está sendo desenvolvida. 
Qualquer Dev consegue criar seus próprios snippets.

### Como criar seus próprios snippets

No Visual Studio Code, os blocos de código podem ser acessados através do IntelliSense (Ctrl + Barra de espaço). 
Este recurso irá mostrar todas as sugestões de código que podem ser utilizadas.
Para criar seus próprios blocos de código, é só acessar **File > Preferences > User snippets** e escolher a linguagem.

Todos os trechos de código encontram-se em formato JSON e são armazenados em arquivos que fazem referência ao usuário que criou.
Os nomes de arquivos dos snippets seguem um padrão pré-determinado. Se você estiver criando para JavaScript, o nome do arquivo será “javascript.json”.

* [marketplace.visualstudio.com/vscode](https://marketplace.visualstudio.com/vscode)

## Código Verboso

Aquele que precisa de mais palavras, ou palavras mais longas, do que o necessário para expressar adequadamente a intenção do código.
Em códigos verbosos existem muitos símbolos ou símbolos muito longos.
- Por que escrever function() { return 42; } quando pode escrever apenas () => 42 ???
Código menos verboso deve ficar sempre mais claro e legível, não o contrário.
- JavaScript nunca foi muito verbosa, mas foi um pouco, agora está se modernizando para ser menos ainda.
