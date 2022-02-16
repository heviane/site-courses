# Sobre o CSS3 - Media Queries :world_map:
Use **Media Queries** para criar layouts diferentes para diferentes tamanhos e dispositivos de tela.
Use a regra **@media** para realizar as consultas de mídia.
**Obs:** Verifica capacidade do dispositivo (CSS3), ao invés do tipo de dispositivo (CSS2).

## Media Types
Tipos de mídias no CSS3 (propriedades):
- **all:** Used for all media type devices
- **print:** Used for printers
- **screen:** Used for computer screens, tablets, smart-phones etc.
- **speech:** Used for screenreaders that "reads" the page out loud

Capacidades dos dispositivos:
- largura e altura da janela de visualização
- largura e altura do dispositivo
- orientação (modo paisagem ou retrato)
- resolução
	
### Sintaxe de consulta de mídia
- Consulta, consiste em:
	- um tipo de mídia (not|only)
	- pode conter uma ou mais expressões (and|or|not), que são resolvidas como verdadeiras ou falsas.

- Sintaxe CSS:

		@media not|only mediatype and (mediafeature and|or|not mediafeature) {
		  CSS-Code;
		}
		
- Sintaxe HTML:

		<link rel="stylesheet" media="mediatype and|not|only (expressions)" href="print.css">

O resultado é verdadeiro se tipo de mídia especificado for igual ao tipo de mídia do dispositivo, e todas as expressões na consulta forem verdadeiras. 
Quando verdadeiro, o estilo correspondente é aplicado, seguindo as regras normais em cascata.
A menos que você use os operadores **not** ou **only**, o tipo de mídia é opcional e o **all** tipo estará implícito.

- Exemplo de como aplicar diferentes estilos para diferentes tipos de mídias:

		<link rel="stylesheet" media="screen and (min-width: 900px)" href="widescreen.css">
		<link rel="stylesheet" media="screen and (max-width: 600px)" href="smallscreen.css">
​	
### Exemplos:
- Altera cor de fundo do elemento **body** para "lightblue" quando a janela do navegador é de 600 px de largura ou menos, para o tipo de mídia **screen**:

		@media only screen and (max-width: 600px) {
		  body {
			background-color: lightblue;
		  }
		}
		
- Oculte um elemento quando a largura do navegador for de 600 px ou menos:

		@media screen and (max-width: 600px) {
		  div.example {
			display: none;
		  }
		}	

- Defina a cor de fundo para:
	- Rosa se a janela de visualização tiver 800 pixels de largura ou mais larga 
	- Verde se a janela de visualização tiver entre 400 e 799 pixels de largura
	- Azul se a janela de visualização for menor que 400 pixels

			body {
			  background-color: lightblue;
			}
			@media screen and (min-width: 400px) {
			  body {
				background-color: lightgreen;
			  }
			}
			@media screen and (min-width: 800px) {
			  body {
				background-color: lavender;
			  }
			}

## References
* [CSS Media Queries](https://www.w3schools.com/css/css3_mediaqueries.asp)
* [CSS @media](https://www.w3schools.com/cssref/css3_pr_mediaquery.asp)
* [CSS Media Queries - Exemplos](https://www.w3schools.com/css/css3_mediaqueries_ex.asp)
