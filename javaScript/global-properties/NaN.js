/*
    A propriedade NaM é uma variável no escopo global que representa um Not-A-Number. 
        O valor inicial de NaN é Not-A-Number. 

        Ao contrário de todos os outros valores possíveis em JavaScript, 
        não é possível usar os operadores de igualdade (== e ===) para comparar um valor NaN e determinar se o valor é NaN ou não, 
        porque ambos NaN == NaN e NaN === NaN são avaliados como false. 
    
    A função isNaN() fornece uma verificação de igualdade conveniente em relação a NaN.
        A função determina se um valor é NaN ou não.
        O valor é primeiro forçado a um Number, então o valor resultante é testado para determinar se é NaN.
        Retorna true se for NaN; caso contrário, false.
*/

//------------ Propriedade NaN
console.log(NaN);
console.log(Number.NaN);

console.log(NaN === NaN);               // false
console.log(Number.NaN === NaN);        // false
console.log(Number.NaN === Number.NaN); // false

//------------ Função isNaN()
console.log(isNaN(NaN));                // true
console.log(isNaN(Number.NaN));         // true
console.log(Number.isNaN(NaN));         // true
console.log(Number.isNaN(Number.NaN));  // true


//---------------- Exemplo
function valueIsNaN(v) { return v !== v; }
valueIsNaN(1);          // false
valueIsNaN(NaN);        // true
valueIsNaN(Number.NaN); // true
