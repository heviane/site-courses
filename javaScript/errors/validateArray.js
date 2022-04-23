function validateArray(arr, size) {
    try {
        if (!arr && !size) throw new ReferenceError('Envie os argumentos!');

        if (typeof arr !== 'object')
            throw new TypeError('Envie um argumento do tipo Array!');

        if (typeof size !== 'number')
            throw new TypeError('Envie um argumento do tipo Number!');

        if (arr.length !== size) throw new RangeError('Tamanho do array inválido!');

        return arr;

    } catch (e) {
        if (e instanceof RangeError) {
            console.log('RangeError!');
            console.log(e.stack);
        } else if (e instanceof ReferenceError) {
            console.log('ReferenceError!');
            console.log(e.stack);
        } else {
            console.log('Outro tipo de erro!');
            console.log(e.stack);
        }
    }
}

console.log( validateArray([1, 2, 3], 3) );