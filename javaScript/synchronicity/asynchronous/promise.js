// -------------- EXEMPL0 1
// No browser  = ok
// No terminal = SyntaxError: await is only valid in async functions and the top level bodies of modules
const myPromise = new Promise((resolve, reject) => {
    window.setTimeout(() => {
        resolve( console.log('Promise resolved') );
    }, 2000);
});

await myPromise
    .then( (result) => result + 'passando pelo then')
    .then( (result) => result + ' e agora acabou!')
    .catch( (error) => console.log(error.message));

// -------------- EXEMPL0 2
function resolveAfter2Seconds(x){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, 2000);
    })
}
async function asyncCall(){
    console.log('start...');
    let x = await resolveAfter2Seconds('Promise resolved...')
    console.log(x)
    console.log('end...');
}
asyncCall()
/* ---------------- Result com await
    start...
    Promise resolved...
    end...
*/
/* ---------------- Result sem await
    start...
    Promise { <pending> }
    end...
*/
