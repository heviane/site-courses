// =========================== Classes de ERROR em Javascript ===========================
// argumentos opcionais
// fileName e lineNumber não são padrão, então pode ser que em algum navegador não funcione
let message    = 'throwing error...'
let fileName   = 'index.js'
let lineNumber = 12

// Classe Genérica de Erros
const myError = new Error(message, fileName, lineNumber);
myError.name    = 'Name of Error';
myError.message = 'Message of Error';
// myError.stack   = 'Stack of Error';
console.log(myError.name);
console.log(myError.message);
console.log(myError.stack);

// Classes mais usadas e comuns
const myEvalError = new EvalError(message, fileName, lineNumber);
console.log(myEvalError);

const myRangeError = new RangeError(message, fileName, lineNumber);
console.log(myRangeError);

const myReferenceError = new ReferenceError(message, fileName, lineNumber);
console.log(myReferenceError);

const mySyntaxError = new SyntaxError(message, fileName, lineNumber);
console.log(mySyntaxError);

const myTypeError = new TypeError(message, fileName, lineNumber);
console.log(myTypeError);

const myURIError = new URIError(message, fileName, lineNumber);
console.log(myURIError);
