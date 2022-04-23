
// Se o valor retornado não for uma Promise, então ele será convertido em uma Promise resolvida.
async function f3() {
    var y = await 20;
    console.log(y); // 20
}
f3();

// Exemplo de await sozinho (sem async function) com Javascript Modules
const colors = fetch('../data/colors.json')
  .then(response => response.json());

export default await colors;
