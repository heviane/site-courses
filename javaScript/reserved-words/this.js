// ================= Call()
/*
    Chama uma função com um this valor e uma lista de argumentos individuais.
        Sintaxe: fun.call(thisArg, arg1, ... , argN)
    Se o primeiro argumento <b>this</b> não for passado, o valor de <b>this</b> será vinculado ao objeto global.
        Mas, no modo estrito, o valor de this será undefined.

    NOTA: Passar o objeto como this valor não é estritamente necessário, mas é feito para fins explicativos.
*/
// --- Example com objeto e sem argumentos
const person = { name: 'Miguel' };
const animal = { name: 'Floquinho' };
function getSomething(){ console.log(this.name); }
getSomething.call(person); // Miguel
getSomething.call(animal); // Floquinho
getSomething.call(); // undefined ***Mesmo comentando todos os outros objetos e exemplos***

// --- Example com objeto e com argumentos
const obj = { num1: 1, num2: 2 };
function sum(a, b){ return this.num1 + this.num2 + a + b; }
console.log( sum.call(obj, 3, 4) ); // 10

// --- Example com função de anônima de execução automática, com array e com argumentos
const animals = [
    { species: 'Lion', name: 'King' },
    { species: 'Whale', name: 'Fail' }
];
for (let i = 0; i < animals.length; i++) {
    (function(i) {
        this.print = function() { console.log('#' + i + ' ' + this.species + ': ' + this.name); }
        this.print();
    }).call(animals[i], i);
}

// --- Example (Executado no navegador)
var sData = 'Wisen';
function display() { console.log('sData value is %s ', this.sData); }
display.call();  // sData value is Wisen  

// ================= Apply()


// ================= Bind()
/*
    O método bind() cria uma nova função que, quando chamada, tem sua palavra-chave this definida com o valor fornecido, com uma sequência determinada de argumentos precedendo quaisquer outros que sejam fornecidos quando a nova função é chamada.

    Sintaxe: function.bind(thisArg[, arg1[, arg2[, ...]]])
*/

// --- Example (executado no navegador)
this.x = 9; //this aqui se refere ao objeto global "window" do navegador
var module = {
    x: 81,
    getX: function() { return this.x; }
};

console.log( module.getX() ); // 81

var retrieveX = module.getX;
console.log( retrieveX() ); // retorna 9 - a função foi invocada no escopo global

// Criando uma nova função com 'this' vinculada ao módulo
// Novatos podem confundir a variável x global com a propriedade x do módulo
var boundGetX = retrieveX.bind(module);
console.log( boundGetX() ); // 81

