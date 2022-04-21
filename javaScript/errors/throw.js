console.log('before the error');
throw 'throwing error...';
console.log('after the error');

/*  
    node throw.js
    node --trace-uncaught throw.js

    Uncaught is because the error type has not been defined.
    So the error was not caught
*/