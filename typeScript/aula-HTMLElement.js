"use strict";
// ==================================> Interface HTMLElement = Tratando tags do HTML
/* ----- Interface HTMLElement
    Representa qualquer elemento HTML (É um tipo genérico).
    TypeScript infere por padrão que o tipo é HTMLElement.
    Alguns elementos implementam diretamente essa interface, outros a implementam por meio de uma interface que a herda.
    https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLElement
*/
// ----- Exemplo 1: Criando elemento HTML e adicionando conteúdo
const app = document.getElementById("app");
const p = document.createElement("p");
p.textContent = "Incluíndo texto em um elemento HTML";
app === null || app === void 0 ? void 0 : app.appendChild(p);
// ----- Exemplo 2: Tag input
const input = document.getElementById('input');
input.addEventListener('input', (event) => {
    console.log('Digitando...');
    const i = event.currentTarget;
    console.log('Value: ' + i.value);
});
// Se usar neste formato de implementação de interface, vai dar ERRO.
// const input: HTMLElement = document.getElementById('input');
// Porque a ordem de execução importa.
// Assim o input é criado antes de receber o elemento.
// // ----- Exemplo 3: Convertendo HTMLElement para HTMLSelectElement.
// const select = (<HTMLSelectElement>document.getElementById('select')).value;
// //Este <> antes, equivale a conversão de tipo.
// console.log('select: ' + select);
