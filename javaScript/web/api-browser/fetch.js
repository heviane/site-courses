if (window.fetch) {
    // run my fetch request here
} else {
    // do something with XMLHttpRequest?
}


// ------------ Exemplo simples
fetch('https://api.github.com/users') 
    // Primeira promise, resolve o objeto response extraindo os dados com o método json()
    .then( response => response.json())  
    // Segunda promise, resolve o resultado recebido da primeira promise
    .then(data => console.log(data))  
    // Pega os erros, se houver   
    .catch(error => console.log(error))

fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log(error);
    });

// ------------ Exemplo validando o retorno
fetch('flowers.jpg')
    .then(response => {
        if (!response.ok) {throw new Error('Network response was not OK')}
        return response.blob();
    })
    .then(myBlob => {myImage.src = URL.createObjectURL(myBlob)})
    .catch(error => {console.error('There has been a problem with your fetch operation:', error)});

// ------------ Exemplo async/await
async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {'Content-Type': 'application/json'},
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}
postData('https://example.com/answer', { answer: 42 })
    .then(data => {console.log(data); });  // JSON data parsed by `data.json()` call
