function checkArrays(arr, num) {
    try {
        if (!arr && !num) throw new ReferenceError('Envie os argumentos!');

        if (typeof arr !== 'object')
            throw new TypeError('Envie um argumento do tipo Array!');

        if (typeof num !== 'number')
            throw new TypeError('Envie um argumento do tipo Number!');

        if (arr.length !== num) throw new RangeError('Tamanho do array inválido!');

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

console.log( checkArrays([1, 2, 3], 3) );