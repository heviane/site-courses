var test = 'Escopo global';
console.log(test);

function fn(){
    var fnTest = 'Escopo local';
    console.log(fnTest);
}
fn();
