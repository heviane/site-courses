/*
    As funções assíncronas sempre retornam um objeto promise. 
    Se o valor de retorno de uma função assíncrona não for explicitamente uma promise, 
    ele será encapsulado implicitamente em uma promise.
*/
async function foo1(x) {
    return x
}
// é similar a:
function foo2(x) {
    return Promise.resolve(x)
}
const x = 'testing...';
console.log(typeof foo1(x)); // object
console.log(foo1(x));        // Promise { 'testing...' }

console.log(typeof foo2(x)); // object
console.log(foo2(x));        // Promise { 'testing...' }

/*
    Mesmo que o valor de retorno de uma função assíncrona se comporte como se estivesse 
    envolvido em um Promise.resolve, eles não são equivalentes.
    Uma função assíncrona retornará uma referência diferente, 
    enquanto Promise.resolve retornará a mesma referência se o valor fornecido for uma promise.
    Pode ser um problema quando você deseja verificar a igualdade de uma promise 
    e um valor de retorno de uma função assíncrona.
*/
const p = new Promise((res, rej) => {
    res(1);
})
async function asyncReturn() {
    return p;
}
function basicReturn() {
    return Promise.resolve(p);
}
console.log(p === basicReturn()); // true
console.log(p === asyncReturn()); // false
