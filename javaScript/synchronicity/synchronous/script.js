/* Callback sincrono */

// Usando o método Array.prototype.forEach() para iterar sobre os itens de um array.

const gods = ['Apollo', 'Artemis', 'Ares', 'Zeus'];
gods.forEach(function (value, index){
    console.log(index + '. ' + value);
});