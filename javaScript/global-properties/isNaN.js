/*
    Verifica se o valor Não é um Número (Not-A-Number).
        - Se numérico, retorna o número
        - Senão, retorna NaN
*/

//---------------- Exemplo NaN
function sanitise(x) {
    if (isNaN(x)) {
        return NaN;
        // return Number.NaN;
    }
    return x;
}
console.log(sanitise('1'));          // expected output: "1"
console.log(sanitise('NotANumber')); // expected output: NaN

//---------------- Exemplo
function milliseconds(x) {
    if (isNaN(x)) {
        return 'Not a Number!';
    }
    return x * 1000;
}
console.log(milliseconds('100F'));      // expected output: "Not a Number!"
console.log(milliseconds('0.0314E+2')); // expected output: 3140

//---------------- Exemplo
function clean(x) {
    // Não é possível usar operadores de igualdade para comparar NaN
    if (x === Number.NaN) {
        return null; // can never be true
    }
    if (isNaN(x)) {
        return 0;
    }
}
console.log(clean(Number.NaN));// expected output: 0
