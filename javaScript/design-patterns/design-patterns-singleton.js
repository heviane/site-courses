// Design Pattern: Singleton 

// Exemplo: Variável global
var SETTINGS = {
    api: 'http://localhost',
    trackJsToken: '12345'
}

// Exemplo: Singleton
function MyApp(){
    if(!MyApp.instance){// Caso a var instance não esteja definida, ela é instanciada
        MyApp.instance = this; // instance é apenas uma propriedade p controlar se foi ou não instanciada
    }
    return MyApp.instance;// Sempre vai retornar a mesma instância
}

// Exemplo: Singleton
function Pessoa(){
    if(!Pessoa.instance){
        Pessoa.instance = this;
    }
    return Pessoa.instance;
}
const p3 = Pessoa.call({name:'pedro'});
const p4 = Pessoa.call({name:'nina'});
console.log(p3); // {name: 'pedro'}
console.log(p4); // {name: 'pedro'}
//Após instanciado p 1º vez, sempre vai retornar mesma instância, mesmo q tentem sobrescrever(explicitar contexto diferente).
