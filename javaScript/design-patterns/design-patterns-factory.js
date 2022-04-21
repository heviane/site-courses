// Design Pattern: Factory

// ---- Exemplo NÃO Factory
function FakeUser(){
    this.name = "Fake User";
    this.lastName = "Fake Last Name";
}
const user = new FakeUser();
console.log(user);

// ---- Exemplo SIM Factory
function Pessoa(name){
    return {
        name,
        lastName: 'Bastos'
    }
}
const p1 = Pessoa('Heviane');
console.log(p1);

// ---- Exemplo SIM Factory
function Pessoa(customProperties){
    return {
        name: 'Heviane',
        lastName: 'Bastos',
        ...customProperties 
    }
}
const p2 = Pessoa({name: 'Maria', age: 58}); // Sobrescrever name e add att age
console.log(p2);