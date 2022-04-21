var test;

console.log(typeof test); // undefined

test = undefined;
console.log(typeof test); // undefined

test = 1;
console.log(typeof test);  // number

test = 5.4;
console.log(typeof test);  // number

test = NaN;
console.log(typeof test); // number

test = "test";
console.log(typeof test); // string

test = '';
console.log(typeof test); // string

test = true;
console.log(typeof test); // boolean

test = new Date();
console.log(typeof test); // object

test = () => {};
console.log(typeof test); // function

console.log(typeof {a:2}); // object
console.log(typeof [1, 2, 4] ); // object (array)

console.log(typeof function(){}); // function

test = null;
console.log(typeof test);  // object (Desde os primóridos do JavaScript)
/*
    Na primeira implementação do JS, valores em JS foram representados com uma tag (etiqueta) de tipo e um valor. 
    A tag de tipo para objetos foi 0. 
    null foi representada com o ponteiro NULL (0x00 na maioria das plataformas). 
    Consequentemente, null teve 0 como sua tag de tipo, portanto o typeof retorna esse valor (object).
*/
