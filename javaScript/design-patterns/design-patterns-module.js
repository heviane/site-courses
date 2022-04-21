// Design Pattern: Module

// Exemplo de como era ANTES
// // Criava-se uma função de execução imediata, passava o que ela precisava e fazia as alterações
// (function($){
// 	// your plugin here
// })(JQuery);

// Exemplo de como ficou DEPOIS com o ES6
// Assim, conseguimos separar os arquivos de acordo com a responsabilidade
    // Exemplo de como criar com arquivos separados
        // //...cria em um arquivo...
        // class Person {
        // 	constructor(name){
        // 		this.name = name;
        // 	}
        // }
        // export default Person;
        // //...usa Person em outro arquivo...
        // import Person from './models/person';

        // // exemplo...
        // //const { getName, setName } = require ('module.exports.js'); // Importando o módulo
        // import { getName, setName } from 'module.exports.js'; // Importando o módulo
        // console.log(getName());
        // console.log(setName('Mariana'));
        // console.log(getName());	