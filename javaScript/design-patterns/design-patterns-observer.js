// Design Pattern: Observer

// A instância (subscriber) mantém uma coleção de objetos (observers) e notifica todos eles quando ocorrem mudanças no estado.
// Fica escutando os observers e toda vez q houver alguma alteração fica responsável por chamar todos os subscribers.

/* EXEMPLO: https://github.com/vuejs/vue/blob/dev/src/core/observer/index.js
    - Toda vez q chama a propriedade set
    - Ele controla se determinado valor vai ser atualizado ou não
    - Sempre vai ter a função notify()
    - Toda vez q deleta também chama a função notify()
    *** A ideia é q toda vez q houver alterações no estado, quem estiver escutando vai ser avisado.
*/

// Exemplo de uma implementação em JS
class Observable{
    constructor(){
        this.observers = [];// Tem q manter uma lista de observers (Item = subcribe)
    }
    subscribe(fn){
        this.observers.push(fn);// Função q adiciona subscribe na lista de observers
    }
    unsubscribe(fn){// Função q remove um subscribe da lista de observers
        this.observers = this.observers.filter(subscriber => subscriber !== fn);
    }
    notify(data){
        this.observers.forEach(fn => fn(data));
    }
}
const o = new Observable();// instanciando
const logData1 = data => console.log('Subscribe 1: ' + data);// criando
const logData2 = data => console.log('Subscribe 2: ' + data);// criando
const logData3 = data => console.log('Subscribe 3: ' + data);// criando
console.log(typeof logData1); // function
o.subscribe(logData1);// incluindo
o.subscribe(logData2);// incluindo
o.subscribe(logData3);// incluindo
o.notify('notificação de teste');
o.unsubscribe(logData2);// excluindo
o.notify('notificação de teste 2');
