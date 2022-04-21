try {
    console.log('before the error');
    throw 'throwing error...';
    console.log('after the error');
} catch (e) {
    console.log('caught error: ' + e);
    console.log(typeof e);
    // Checking the error type
    if (e instanceof TypeError) {
        console.log('TypeError');
    } else if (e instanceof RangeError) {
        console.log('RangeError');
    } else if (e instanceof EvalError) {
        console.log('EvalError');
    } else {
        console.log('other error');
    }
} finally {
    console.log('finally...this block will always be executed!');
}

/* ----------------------------- Bloco Finally
    Se o bloco finally retornar um valor, esse valor se tornará o valor de retorno de toda a try…catch…finally, 
    independente de qualquer return declarado nos blocos try...catch
*/
function f() {
    try {
        console.log(0);
        throw 'bogus';
    } catch (e) {
        console.log(1);
        return true;    // this return statement is suspended
        // until finally block has completed
        console.log(2); // not reachable
    } finally {
        console.log(3);
        return false;   // overwrites the previous "return"
        console.log(4); // not reachable
    }
    // "return false" is executed now
    console.log(5);   // not reachable
}
console.log(f()); // 0, 1, 3, false

/*
    A substituição de valores de retorno pelo bloco finally também se aplica a exceções lançadas 
    ou relançadas dentro do bloco catch:
*/
function f() {
    try {
        throw 'bogus';
    } catch (e) {
        console.log('caught inner "bogus"');
        throw e; // this throw statement is suspended until
        // finally block has completed
    } finally {
        return false; // overwrites the previous "throw"
    }
    // "return false" is executed now
}
try {
    console.log(f());
} catch (e) {
    // this is never reached!
    // while f() executes, the `finally` block returns false,
    // which overwrites the `throw` inside the above `catch`
    console.log('caught outer "bogus"');
}
// OUTPUT
// caught inner "bogus"
// false

/*  
    node try-catch-finally.js
    node --trace-uncaught try-catch-finally.js
*/