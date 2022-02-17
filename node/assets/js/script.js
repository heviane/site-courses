// Simulação single-thread (É como o Node trabalha)
function eventLoop(){
    var a = 1;
    var b = 2;
    var c = 3;

    console.log(a);
    setTimeout( () => {
        console.log(b);
    }, 1000);
    console.log(c);
}