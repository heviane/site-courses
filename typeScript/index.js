"use strict";
console.log('Hello TypeScript');
// ==================================> Tipagem de dados
// Exemplo em JavaScript = Validação de tipos manual
// function sum1(a, b) {
//     if (typeof a === "number" && typeof b === "number") {
//         return a + b;
//     }
//     return NaN;
// }
// Exemplo em TypeScript = Validação de tipos automática
function sum2(a, b) {
    return a + b;
}
console.log(sum2(1, 2));
;
const canino = {
    name: 'Dog',
    type: 'terrestre',
    porte: 'medio',
    executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`)
};
const felino = {
    name: 'Gato',
    type: 'terrestre',
    visaoNoturna: true,
    executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`)
};
console.log(canino);
console.log(felino);
;
const animal = {
    name: 'Animal é do tipo domestico = Canino ou Felino',
    type: 'terrestre',
    porte: 'medio'
};
console.log(animal);
// ==================================> Interface HTMLElement = Tratando tags do HTML
// arquivo ""aula-HTMLElement.ts""
// ==================================> Generic Type
/* ----- Generic Type
    - Define um tipo genérico, que pode receber qualquer tipo de dado.
    - É padrão usar a letra " T " para representar o tipo genérico.
    - Os tipos são inferidos de acordo com os valores recebidos.
    - Exemplo:
        function fn <T>(arg: T){ return arg; }
*/
function addItemToList(arr, value) {
    return arr.map(item => item + value);
}
addItemToList([1, 2, 3], 1); // Atribui o tipo Number
addItemToList(['a', 'b', 'c'], 'x'); // Atribui o tipo String
const user = {
    name: 'Heviane',
    email: 'heviane@gmail.com'
};
const admin = {
    name: 'Pedro',
    email: 'pedro@gmail.com',
    role: 'gerente',
};
function redirect(user) {
    // if(user.role === 'gerente'){  // ERRO = role não existe em IUser
    if ('role' in user) { // OK
        console.log('redirect to admin area');
    }
    console.log('redirect to user area');
}
redirect(user);
redirect(admin);
// const myDog: Dog = {
//     name: 'Rex',
//     age: 3
// }
class MyDog {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
}
const rex = new MyDog('Rex', 3);
console.log(`nome: ${rex.name}, idade: ${rex.age}`);
const brasileiro = {
    name: 'João',
    age: 30
};
/* ==================================> References
    https://www.typescriptlang.org/docs/handbook/basic-types.html
    https://github.com/DefinitelyTyped/DefinitelyTyped

    Utility Types:
    https://www.typescriptlang.org/docs/handbook/utility-types.html

    https://andrebtoe.com/2016/05/02/typescript3/
*/ 
