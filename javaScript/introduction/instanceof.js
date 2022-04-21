// O operador instanceof testa se um objeto tem, em seu prototype, a função construtora.

// ------------- Example 1
/* Demonstrating that mycar is of type Car and type Object
    The following code creates an object type Car and an instance of that object type, mycar. 
    The instanceof operator demonstrates that the mycar object is of type Car and of type Object.
*/
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
var mycar = new Car("Honda", "Accord", 1998);
var a = mycar instanceof Car;    // retorna true
var b = mycar instanceof Object; // retorna true

// ------------- Example 2
var simpleStr = "This is a simple string";
var myString  = new String();
var newStr    = new String("String created with constructor");
var myDate    = new Date();
var myObj     = {};

simpleStr instanceof String; // returns false, checks the prototype chain, finds undefined
myString  instanceof String; // returns true
newStr    instanceof String; // returns true
myString  instanceof Object; // returns true
myObj instanceof Object;     // returns true, despite an undefined prototype
({})  instanceof Object;     // returns true, same case as above
myString instanceof Date;    // returns false
myDate instanceof Date;      // returns true
myDate instanceof Object;    // returns true
myDate instanceof String;    // returns false

// ------------- Example 3
// definindo construtores
function C() { }
function D() { }

var o = new C();

// true, porque: Object.getPrototypeOf(o) === C.prototype
o instanceof C;

// false, porque D.prototype não está no prototype desse objeto
o instanceof D;

o instanceof Object; // true, porque:
C.prototype instanceof Object // true

C.prototype = {};
var o2 = new C();

o2 instanceof C; // true

// false, porque C.prototype não está mais no prototype desse objeto
o instanceof C;

D.prototype = new C(); // use inheritance
var o3 = new D();
o3 instanceof D; // true
o3 instanceof C; // true

/*
    Note que o resultado do instanceof pode alterar quando a gente altera o prototype da função construtora. 
    No entanto, a gente não pode alterar (por padrão) o prototype do objeto. 
    Só é possível fazer essa alteração usando a pseudopropriedade __proto__.
*/