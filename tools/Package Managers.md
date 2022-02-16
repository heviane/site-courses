# Package Manager

- Diferença entre Yarn e NPM? Basicamente, o Yarn tem um desempenho melhor.

## NPM

A instalação é realizada junto com o Node.js

`npm -v`

- Inicialização de projeto:

`npm init -y`

cria o arquivo **package.json** contendo todas as configurações e dependências do projeto.
cria o arquivo **package-lock.json** que refere-se ao diretório **node_modules** que contém todas as dependências do Node.

## Yarn

- Instalação:

`npm install --global yarn`

`yarn --version`

- Inicialização de projeto:

`yarn init -y`

cria o arquivo **package.json** contendo todas as configurações e dependências do projeto.
cria o arquivo **yarn.lock** equivalente ao arquivo **package-lock.json** do NPM.

## NPX

Gerenciador de pacotes npm (x provavelmente significa eXecute).
Executa os binários do pacote npm.
O uso típico é baixar e executar um pacote temporariamente ou para testes.

EXEMPLO: **create-react-app** é um pacote npm que deve ser executado apenas uma vez no ciclo de vida de um projeto.
Portanto, é preferível usar o npx para instalá-lo e executá-lo em uma única etapa.

`npm install --global npx`

`npx -v`

- Incialização de projeto:

`npx react-native init my-app`

`npx create-react-app my-app`

## package.json

Espécie de manifesto do projeto.
Pode fazer várias coisas, completamente não relacionadas.
É um repositório central de configurações de ferramentas, por exemplo.

A propriedade **name** define o nome do pacote, caso você venha a publicá-lo no **NPM** algum dia.

## References

- [o-guia-completo-do-package-json-do-node-js](https://www.luiztools.com.br/post/o-guia-completo-do-package-json-do-node-js)
- [npmjs.com](https://www.npmjs.com)
- [github.com/npm/cli](https://github.com/npm/cli)
- [yarnpkg.com](https://yarnpkg.com)
- [github.com/yarnpkg/yarn](https://github.com/yarnpkg/yarn)
- [npmjs.com/package/npx](https://www.npmjs.com/package/npx)
