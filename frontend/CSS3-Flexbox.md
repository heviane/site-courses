# Sobre o CSS3 - Flexbox :world_map:
**CSS Flexible Box Layout** é uma estrutura de layout **responsiva** e **flexível** sem usar flutuação ou posicionamento.
Organiza os elementos HTML dentro de seus containers de forma dinâmica.
Isso significa que a página se adapta com o tamanho da tela do usuário.

## Flex container e flex items
- No **HTML**:

		<div class="flex-container">
		  <div>1</div>
		  <div>2</div>
		  <div>3</div>
		</div>

- No **CSS**:
	Flex container torna-se flexível definindo a propriedade **display** para **flex**:

		.flex-container {
		  display: flex;
		}

	- Propriedades do **flex container**:
		- **flex-direction:** define em qual direção o contêiner deseja empilhar os itens flexíveis.
			- column: empilha os itens flexíveis verticalmente (de cima para baixo).
			- column-reverse: empilha os itens flexíveis verticalmente (mas de baixo para cima).
			- row: empilha os itens flex horizontalmente (da esquerda para a direita).
			- row-reverse: empilha os itens flex horizontalmente (mas da direita para a esquerda).
			
		- **flex-wrap:** define se os itens flexíveis devem ser agrupados ou não.
			- wrap: os itens flexíveis serão agrupados, se necessário.
			- nowrap: os itens flexíveis não serão agrupados **(padrão)**.
			- wrap-reverse: os itens flexíveis serão agrupados, se necessário, na ordem inversa.
			
		- **flex-flow:** é uma propriedade abreviada para definir as propriedades flex-directione flex-wrap.
		
		- **justify-content:** é usada para alinhar os itens flexíveis.
			- center: alinha os itens flexíveis no centro do contêiner.
			- flex-start: alinha os itens flexíveis no início do contêiner **(padrão)**.
			- flex-end: alinha os itens flexíveis no final do contêiner.
			- space-around: exibe os itens flexíveis com espaço antes, entre e depois das linhas.
			- space-between: exibe os itens flexíveis com espaço entre as linhas.
			
		- **align-items:** usada para alinhar os itens flexíveis
			- center: alinha os itens flexíveis no meio do contêiner.
			- flex-start: alinha os itens flexíveis na parte superior do contêiner.
			- flex-end: alinha os itens flexíveis na parte inferior do contêiner.
			- stretch: estica os itens flexíveis para preencher o contêiner **(padrão)**.
			- baseline: alinha os itens flexíveis, como os alinhamentos de suas linhas de base.
			**Obs:** os itens são alinhados pela linha de base do texto.
			
		- **align-content:** usada para alinhar as linhas flexíveis.
			- space-between: exibe as linhas flexíveis com espaço igual entre elas.
			- space-around: exibe as linhas flexíveis com espaço antes, entre e depois delas.
			- stretch: estica as linhas flexíveis para ocupar o espaço restante **(padrão)**.
			- center: exibem as linhas flexíveis no meio do contêiner.
			- flex-start: exibe as linhas flexíveis no início do contêiner.
			- flex-end: exibe as linhas flexíveis no final do contêiner.
		
	- Propriedades do **flex item**:
		- **order:** especifica a ordem dos itens flexíveis.
		- **flex-grow:** especifica quanto um flex item crescerá em relação ao resto dos flex items.
		- **flex-shrink:** especifica o quanto um flex item irá encolher em relação ao resto dos flex items.
		- **flex-basis:** especifica o comprimento inicial de um item flexível.
		- **flex:** propriedade estenográfica para os flex-grow, flex-shrink e flex-basis propriedades.
		- **align-self:** especifica o alinhamento do item selecionado dentro do recipiente flexível.
		**Obs:** substitui o alinhamento padrão definido pela propriedade **align-items** do contêiner
	
## References
* [CSS Flexbox](https://www.w3schools.com/css/css3_flexbox.asp)
