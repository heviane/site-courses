// Funções assíncronas servem para trabalhar com Assincronicidade, como as promises.
async function resolvePromise(){
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise resolved');
        }, 2000);
    });

    const resolved = await myPromise
        .then( (result) => result + ' passando pelo then')
        .then( (result) => result + ' e agora acabou!')
        .then ( (result) => console.log(result))
        .catch( (error) => console.log(error.message));

    // // outra forma (promise dentro de try...catch)
    // let resolved;
    // try{
    //     resolved = await myPromise
    //     .then( (result) => result + ' passando pelo then')
    //     .then( (result) => result + ' e agora acabou!')
    //     .then ( (result) => console.log(result))
    // }catch(error){
    //     console.log(error.message)
    // }
  
    console.log('após a execução da promise');
    console.log(resolved);// undefined
    console.log(typeof resolved);// undefined

    return resolved;
}

// await resolvePromise(); // No browser funciona...sem o await aparece a mensagem de promise pendente antes...
resolvePromise();          // No terminal funciona assim...
