// ======= Debug Console (Developer Tools)

if (window.console){
    console.log('Debug Console is available!'); // somente no navegador
}

console.clear();//limpar console

console.count();//Registre o número de vezes que esta linha foi chamada com o rótulo fornecido.
console.countReset();//Limpa o contador de contagem de chamadas.
            
// ----- Imprimir Mensagens
console.log('Logging...');// Retorna texto BRANCO sem ícone.
console.warn('warm...');  // Retorna texto AMARELO com ícone de alerta.
console.error('Error...');// Retorna texto VERMELHO com ícone de erro.
console.debug('Debug...');// Retorna texto AZUL.
console.info('Info...');  // Retorna texto BRANCO sem ícone.
console.trace('Trace...');// Retorna CAMINHO da execução do código.

// ----- Agrupar Mensagens
console.group('Start of grouping...extendido'); 
    console.log('Group Message 1');
    console.warn('Group Message 2');
    console.error('Group Message 3');
console.groupEnd(); 

console.groupCollapsed('Start of grouping...não extendido'); 
    console.log('Group Message 1');
    console.warn('Group Message 2');
    console.error('Group Message 3');
console.groupEnd(); 

// ----- Medir Tempo de Execução
console.time('Begin Time');
    let x = 0;
    for(let i = 0; i < 20; i++){
        x++;   
    }
    console.log('X: ' + x);
console.timeEnd('End Time');

// ----- Arrays e Objetos
console.table(['a', 'b', 'c']);             // Retorna tabela com Index e Value do array.
console.table({p1: 'a', p2: 'b', p3: 'c'}); // Retorna tabela com Property e Value do objeto.

// ----- Condicional: Imprimi mensagem de condição for FALSE
let isBoolean;

isBoolean = true
console.assert(isBoolean, 'Valor de isBoolean: ' + isBoolean); 
isBoolean = false
console.assert(isBoolean, 'Valor de isBoolean: ' + isBoolean); 

// ----- Estilização de Mensagens (Limitado)
console.log('%c My styled log', 'color: blue; font-size: 20px');