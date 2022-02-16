// Importando uma funcionalidade nativa do Projeto "export.ts"
import { hello } from './export';
console.log(hello);

// Importando uma biblioteca externa (JQuery Library)
// Implementando a interface Jquery redefinida no "typings.d.ts" 
    // Este arquivo contém todos os types gerais do projeto.
    // Neste arquivo, a interface do JQuery foi redefinida incluindo uma nova função.
import $ from 'jquery';
$.fn.extend({
    newFunction: function(){
        console.log('Running new function');
    }
});
$('input').newFunction(); // Se comentar a redefinição da interface no arquivo "typings.d.ts" dá ERRO.
$('body').newFunction();