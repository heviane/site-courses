function uniqueElements(array) {
    // declarando um set que recebe um array
	let unique = new Set(array);

    // retorna um objeto set
    // return unique; 

    // retorna um set dentro de um array
	// return [unique];

    // retorna um array usando spread operator
    // para que cada elemento do set se torne um elemento do array
	return [...unique]; 
}

// declarando um array
const arr = [30, 30, 40, 5, 223, 2049, 3034, 5];

console.log(uniqueElements(arr)); 
// [ 30, 40, 5, 223, 2049, 3034 ]
// Número 5 estava repetido no array, mas não foi copiado para o Set.