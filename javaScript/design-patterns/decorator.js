
// Design Pattern: Decorator

/* Vamos supor que queremos controlar a execução de uma função.
Essa função somente vai ser executada se usuário estiver autenticado.
Aqui no JS sem a sintaxe de decoration. */

let loggedIn;
// Função decorator recebe outra função como parâmetro e estende o seu comportamento sem modificá-la explicitamente
function callLogin(fn){ // Função decorator que controla a execução da função sum(), p permitir somente se logado
    return loggedIn && fn();
}
function sum(a, b){
    return a + b;
}
loggedIn = false;
console.log(callLogin(() => sum(1, 2))); // false = Não vai executar a função sum()
loggedIn = true;
console.log(callLogin(() => sum(1, 2))); // 3 = Sim vai executar a função sum()

// // Outro exemplo, usando a sintaxe decoration
// function readonly(target, name, descriptor){
// 	descriptor.writable = false;
// 	return descriptor;
// }
// class Job {
// 	@readonly
// 	title(){ return 'CEO' };
// 	// definindo propriedade title e definindo que é somente de leitura
// }
// // Outro exemplo no angular
// @component({
// 	selector: 'app-reactive-favorite-color',
// 	template: 'Favorite color:<input type="text" [formControl]="favoriteColorControl">'
// })
// export class FavoriteColorComponent{
// 	favoriteColorControl = new FormControl('');
// }