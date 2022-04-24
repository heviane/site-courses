// let cont = 0;
// console.log(cont++); // 0
// console.log(cont++); // 1

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/escape
// https://www.oocities.org/tutorialdhtml/a11.htm

// ==================== var (Escopo global) X let (Escopo de bloco) 
// var test = 'escopo global';
// function fn(){
//     var test = 2;
//     console.log('escopo de bloco'); 
// }
// fn();
// console.log(test); 
// var test = 'Redeclarando var escopo global';
// console.log(test); 

// let x = 1;
// console.log(x);
// // let x = 2; // ERRO *** NÃO pode ser redeclarada ***
// x = 2; // *** Pode ser retribuída ***
// console.log(x);

// let y = 1;
// console.log(y);
// var y = 2;  // ERRO *** let NÃO pode ser redeclarada ***

// ==================== ver ====================
// function compare(a,b){
//     if(!a || !b){
//         console.log(`a: ${a} e b: ${b}`) 
//         console.log("Error: one of the arguments is null");
//         return; 
//     }
//     isIguais = a === b;  // Não usei let, var e const
//     (isIguais) ? console.log(`${a} e ${b} são iguais`) : console.log(`${a} e ${b} são diferentes`);
//     // if(a !== b){
//     //     console.log(`${a} e ${b} são diferentes`);
//     // }else{
//     //     console.log(`${a} e ${b} são iguais`);
//     // }
//     sum = a + b;
//     sumMaior = sum > 10;
//     sumMenor = sum < 10;
//     if(sumMaior){
//         console.log(`${a} e ${b} somados (${sum}) são maiores que 10`);
//     }
//     if(sumMenor){
//         console.log(`${a} e ${b} somados (${sum}) são menores que 10`);
//     }
// }
// compare(0, 1);  // 0 retorna erro
// compare(0, ''); // b retorna vazio
// compare(1);     // b: undefined

// ==================== switch ====================
// var scoreboard;
// var player1 = 5;
// var player2 = 3;
// switch(scoreboard){
//     case (scoreboard = ((player1 > player2) ? player1 : player2)):
//         console.log("Player 1 wins!");
//         break;
//     case scoreboard = (player2 > player1):
//         console.log("Player 2 wins!");
//         break;
//     case scoreboard = 0: 
//         console.log("testing...0");
//         break;
//     case scoreboard = 1:
//         console.log("testing...1");
//         break;
//     default:
//         console.log("Try again, no one won!");
//         break;
// }
