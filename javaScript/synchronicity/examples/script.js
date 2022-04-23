async function fn(){
    calculate(5, 2);
    var ret = await simulateAPI(3000)
    console.log(ret);
    calculate(6, 7);
}

function simulateAPI(time){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('API response');
        }, time);
    })
}

function calculate(a, b){
    console.log(a + b);
}

// execution
fn();

/* ----------- Output without async
    7
    Promise { <pending> }
    13    
*/
/* ----------- Output with async
    7
    API response
    13    
*/