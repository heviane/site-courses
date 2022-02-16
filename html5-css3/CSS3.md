# Sobre o CSS3 :world_map:

Linguagem de formatação de conteúdo para dar estilo à uma página Web.
Responsável por definir o formato da web.
Criada em 1996 👏.

Sintaxe é bem simples, cria-se regras de estilo para elementos ou grupos de elementos.

Modelos de layout: flow, grid ou flex (Flexible Box) 

## Anatomia de um conjunto de regras CSS
- Seletores
- Declaração
- Propriedades
- Valor das propriedades

A declaração de uma **regra** é formada por um par de **propriedade** e **valor**, separados por **:(dois pontos)**.
As declarações de  **regras** são separadas por um **;(ponto-e-vírgula)**.
O conjunto das **regras** fica posicionado dentro de um par de **{}(Chaves)**.
Cada conjunto de regras é precedida por um ou mais seletores separados  por **,(vírgula)**.

### Seletores

- Seletor de Tipo ou de elemento
	Todos os elementos HTML de determinado tipo. 
	
		p { font-family: Arial, Helvetica, sans-serif; font-size: 14px; }
	
- Seletor de Id
	Representa **qualquer tipo de elemento**. Formata o elemento especificado pelo id.
	A declaração de um id é precedida por uma **#(hash)** + um nome e pode ser declarado **uma única vez** em uma página.
	
		#title{ font-weight: bold; }
	
- Seletor de Classe
	Representa **qualquer tipo de elemento**. Formata os elementos especificados pela classe.
	A declaração de uma classe é precedida por um **.(ponto final)** + um nome e pode ser declarada **vários vezes** em uma página. Não há restrições!
	
		.subtitle{ font-style: italic; }
	
- Seletor de atributo
	Os elementos na página com o atributo especificado.
	
		img { width: 50px;}
	
- Seletor de pseudo-classe
	Os elementos especificados, mas somente quando estiver no estado especificado. 
	
		a:hover{ background-color: red; }

## Box-Model
Representa cada elemento HTML como uma caixa retângular.

Essa caixa é composta por 4 áreas: 
- **content**: É o que o bloco representa, texto, imagem, etc.
- **border**: Circundam o padding e content (largura e cor).
- **margin**: Espaçamentos entre elementos. Margin Externa.
- **padding**: Espaçamento entre bordas e conteúdo. Margin Interna.
A diferença para as margens é que declarações de imagem de fundo funcionam.


## Como adicionar CSS em um documento HTML
- **Inline**: Através do atributo **style** declarado diretamente no elemento html 
Desta forma, o estilo será aplicado somente no elemento em que foi declarado.

			<body style="background-color:black;">

- **Interno ou Incorporado**: Através do elemento **style**, declarado dentro do elemento **head**
	Desta forma, o estilo será aplicado somente no documento em que foi declarado. 

			<head>
				<style type="text/css">
					ul { font-weight: bold; } 
					li { font-style: italic; }
				</style>
			</head>
	
- **Externo**: Através do elemento **link**, declarado dentro do elemento **head** 
	Desta forma, as regras ficarão externas, e podem ser importadas em diferentes documentos.
	Neste caso, será necessário:
	
	- Criar um arquivo com a extensão ".css".
	- Incluir o atributo **rel** com o valor **stylesheet**. Representa o tipo de arquivo.
	- Incluir o atributo **href** com o valor **style.css**. Representa o caminho do arquivo.
		
			<head>
				<link rel="stylesheet" href="style.css">
			</head>

## Propriedades mais utilizadas
- **Padding**
  Altera o espaçamento. 
  - **Eixo**: Eixo Y (superior e inferior), eixo x (direito e esquerdo)

  		padding: 10px 5px; 
  	
  - **Lado**: Superior, direito, inferior e esquerdo, sempre nesta ordem.

  		padding: 15px 10px 5px 0;
  	

  Esta propriedade também é um atalho para várias outras propriedades. 
  Usado quando temos o mesmo valor para 3 lados, e o quarto precisa ter um valor diferente.

  		padding-top: 15px;         
  		padding-right: 10px;       
  		padding-bottom: 5px;       
  		padding-left: 0;  

- **Border**
Altera a borda. Largura, estilo e cor. nesta ordem ??
	
		border: 3px solid #FFFFFF; 
	
	Esta propriedade também é um atalho para várias outras propriedades. Mais usadas:
	- **border-width**: Largura. Pode ser usada com várias unidades, como px, em e mm.
	- **border-style**: Estilo. Representada por palavras-chave. 
		- **solid**: Mostra uma borda simples e reta;
		- **dotted**: São bolinhas com um pequeno espaçamento entre elas;
		- **dashed**: Forma uma linha tracejada.
	- **border-color**: Cor. Pode ser usada com nome ou código hexadecimal.
	- **Border-radius**: Borda com formato arredondado. *****Segue mesma regra de eixo ou lados
		Unidades mais comuns são: **pixels** e **porcentagem**.
		Colocando apenas um valor mudamos todos os cantos do elemento.
		Mas seguindo aquela mesma ordem que vimos no padding e margin (topo, direita, inferior e esquerda), conseguimos alterar cada canto separadamente.

			border-width: 3px;
			border-style: solid;
			border-color: #000;	

	Outro exemplo com atalhos de forma mais especifica ainda:
	
			border-top-width: 3px;
			border-top-style: solid;
			border-top-color: #000;	

- **Background**
	Altera o fundo. Esta propriedade é um atalho para várias outras propriedades. Mais usadas:
	- **background-position**
	- **background-image**
	- **background-color** (Nome da cor em inglês ou código da cor em hexadecimal)	

			background-position: top;
			background-image: url('img/pexels-pixabay-270366.jpg');
			background-color: white;
			background-color: #FFFFFF;
			background: #FFF;
		
## Estilizando textos
Altera a fonte. Esta propriedade é um atalho para várias outras propriedades. Mais usadas:
- **font-family**
Altera a fonte do texto (fonte da internet ou fonte instalada na máquina cliente).
	- **web safe fonts**: São fontes seguras.
	São encontradas em quase todos os sistemas e podem ser usadas sem preocupação.

- **font-size**
Altera o tamanho da fonte.
	- **pixels**: Unidade de medida mais usada.

- **font-style**
	Altera o estilo da fonte.
	- **italic, normal, oblique, inherit, initial, unset**. 

## Dimensão e Alinhamento
- **width**
Altera a largura.

- **height** 
Altera a altura.

- **max-width**
Define a largura máxima que o elemento pode ter.

- **max-height**
define a altura máxima que o elemento pode ter.

- **margin**
Altera espaçamento entre elementos.

- **text-align**
Altera o alinhamento do texto.

**OBS**: Sempre em relação ao elemento de fora do elemento em questão.

**OBS:** Quando o valor for 0 (zero) não precisamos colocar a unidade! 
