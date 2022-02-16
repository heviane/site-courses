console.log('Hello TypeScript');
// ==================================> Interface
/* ----- Interface
    - Definição de contratos para classe, estrutura de dados.
    - O padrão é que todas as propriedades da interface sejam obrigatórias na implementação da interface.
*/
    interface IAnimal { 
        name: string; 
        type: 'terrestre' | 'aquático'; 
        executarRugido(alturaEmDecibeis: number): void;
    }    
    interface ICanino extends IAnimal {
        porte: 'pequeno' | 'medio' | 'grande';
    }
    interface IFelino extends IAnimal {
        visaoNoturna: boolean;
    };
    const canino: ICanino = {
        name: 'Dog',
        type: 'terrestre',
        porte: 'medio', 
        executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`)
    };
    const felino: IFelino = {
        name: 'Gato',
        type: 'terrestre',
        visaoNoturna: true,
        executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`)
    };
    console.log(canino);
    console.log(felino);

// ==================================> Interface = Propriedade Opcional = Caracter "?"
/* ----- Propriedade Opcional = Caracter "?"
    O caractere "?" indica que a propriedade é opcional.
    Deve ser colocado após o nome da propriedade e antes dos dois pontos ":".
    Assim, é possível implementar a interface (criar um objeto) sem as propriedades opcionais.
    *** Por padrão, as propriedades definidas nas interfaces são obrigatórias na implementação da interface.
*/
    interface IUsuario {
        name: string;
        email: string;
        role?: 'gerente' | 'supervisor' | 'coordenador' | 'funcionario'; 
    }
    const usuario: IUsuario = {
        name: 'Heviane',
        email: 'heviane@gmail.com',
    }
    console.log(usuario);

// ==================================> Interface = Utility Types
//https://www.typescriptlang.org/docs/handbook/utility-types.html
    //--- Exemplo 1: Omit<Type>
    interface IPessoa {
        name: string;
        age: number;
        nacionality: string;
    }
    interface IBrasileiro extends Omit<IPessoa, 'nacionality'> {
        // propriedade nacionality é omitida (removida) para Brasileiro
    }
    const brasileiro: IBrasileiro = {
        name: 'João',
        age: 30
    }
    console.log(brasileiro);
    //--- Exemplo 2: Required<Type>
    interface Props {
        a?: number;  // "?" torna a propriedade opcional
        b?: string;  // "?" torna a propriedade opcional
    }
    const obj: Props = { a: 5 };
    const obj2: Required<Props> = { a: 5, b: 'teste' };

// ==================================> Type
/* ----- Type
    Tudo que é feito com interface pode ser feito com type
    Mas os principais objetivos são:
        - Definição de um TIPO baseado em N interfaces (AND, OR).
            - Junção de interfaces ou Seleção de uma ou outra interface.
        - Definição de que uma variável pode ser uma interface.
*/
    interface IAnimal2 {
        name: string; 
        type: 'terrestre' | 'aquático'; 
    }
    interface ICanino2 extends IAnimal2 {
        porte: 'pequeno' | 'medio' | 'grande';
    }
    interface IFelino2 extends IAnimal2 {
        visaoNoturna: boolean;
    };
    //type animal = ICanino2 & IFelino2;  // Juntar duas interfaces
    type domestic = ICanino2 | IFelino2;   // Ou um ou outro
    const animal: domestic = {
        name: 'Animal é do tipo domestico = Canino ou Felino',
        type: 'terrestre',
        porte: 'medio'
    }
    console.log(animal);

// ==================================> Type Readonly
    interface Dog{
        name: string;
        age: number;
        color?: string; // opcional
    }
    type readonlyDog = {  
        // Iterando as propriedades do objeto Dog
        readonly [k in keyof Dog]: Dog[k]; 
        // A palavra reservada "readonly" está aplicando a propriedade "somente leitura" aos itens do objeto.
    }
    const myDog: readonlyDog = {
        name: 'Rex',
        age: 5,
        color: 'Black'
    }
    console.log(myDog);
    // myDog.name = 'Rex 2';  // Erro!

// ==================================> Generic Type
/* ----- Generic Type
    - Define um tipo genérico, que pode receber qualquer tipo de dado.
    - É padrão usar a letra " T " para representar o tipo genérico.
    - Os tipos são inferidos de acordo com os valores recebidos.
    - Exemplo:
        function fn <T>(arg: T): T { return arg; }
*/
    function fn <T>(arg: T): T { return arg; }
    const arg: string  = fn('testando Generic Type'); 
    const arg2: number = fn(999);
    console.log(`Generic Type (arg1: ${arg}, arg2: ${arg2})`);

    function addItemToList<tipoGenerico>(arr: any[], value: tipoGenerico){
        return arr.map(item => item + value);
    }
    addItemToList([1, 2, 3], 1);      
    addItemToList(['a','b','c'],'x'); 

// ==================================> Condicionais a partir de parâmetros
    interface IUser {
        name: string;
        email: string;
    }
    interface IAdmin extends IUser {
        role: 'gerente' | 'supervisor' | 'coordenador';
    }
    const user: IUser = {
        name: 'Heviane',
        email: 'heviane@gmail.com'
    }
    const admin: IAdmin = {
        name: 'Pedro',
        email: 'pedro@gmail.com',
        role: 'gerente',
    }
    function redirect(user: IUser | IAdmin){
        // if(user.role === 'gerente'){  // ERRO = role não existe em IUser
        if('role' in user){              // OK
            console.log('Usuário admin: ' + user.name + ', role: ' + user.role);
        } else {
            console.log('Usuário comum: ' + user.name);
        }
    }
    redirect(user);
    redirect(admin);

// ==================================> Como importar bibliotecas com typescript
/*
    --- Instalar a biblioteca (JQuery).
        Basta executar o comando: npm install jquery

        TypeScript precisa saber quais são os types do JQuery.
            Opção 1: add new declaration (.d.ts) file containing 'declare module jquery'
                declare module "jquery" {   
                    export function ajax(url: string, settings: JQueryAjaxSettings): JQueryXHR;
                    export function get(url: string, data?: any, success?: any, dataType?: any): JQueryXHR;
                }
            Opção 2: Instalar os pacotes.
                $ npm i --save-dev @types/jquery 
                Adiciona dependência no arquivo package.json
                    "devDependencies": {
                        "@types/jquery": "^3.5.8",
                        "typescript": "^4.5.2"
                    }
        O que é @types/name_of_library?
            É o projeto DefinitelyTyped (https://github.com/DefinitelyTyped/DefinitelyTyped)
            É um projeto enorme que define a tipagem de vários outros projetos.
            Praticamente tudo que estiver no npm, se a biblioteca já tiver definido seus próprios tipos, eles vão estar definidos neste projeto.
            Basta chamar @types/name_of_library e o TypeScript vai procurar o projeto definido pelo DefinitelyTyped ou pode pesquisar no prórpio site do TypeScript.

    --- Como extender uma biblioteca externa?
            - Redefinindo os types da biblioteca.
            - Adicionando novos types (assinaturas) no arquivo typings.d.ts 
            - Usando os mesmos nomes das interfaces nativas.
            - As interfaces com mesmo nome serão unidas: Assinaturas nativas + Assinaturas criadas.
            - Quando formos implementar a interface, teremos todas as assinaturas disponíveis.
            *** Desta forma, não iremos alterar os types nativos ***
            Exemplo: 
                Redefinindo uma interface e adicionando novas propriedades.
                    interface IUser { name: string; }  // Interface nativa da biblioteca
                    interface IUser { age: number; }   // Interface nossa incluída no arquivo "typings.d.ts".
                Implementando a interface.
                    const user: IUser = { name: 'João', age: 30 };  // Propriedades somadas ao objeto.
            Exemplo:
                Redefinindo a assinatura da interface JQuery com a adição de uma nova função.
                    Arquivo "typings.d.ts":
                        interface JQuery {
                            newFunction(): void;
                        }
                Implementando a interface.
                    Arquivo "import.ts":
                        import $ from 'jquery';
                        $.fn.extend({
                            newFunction: function(){
                                console.log('Running new function');
                            }
                        });
                        $('input').newFunction();

*/
// ==================================> Interface HTMLElement = Tratando tags do HTML
// arquivo ""aula-HTMLElement.ts""                    
/* ==================================> References   
    https://andrebtoe.com/2016/05/02/typescript3/
*/