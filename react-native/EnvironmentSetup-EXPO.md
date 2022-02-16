# Ambientes de Desenvolvimento EXPO

Fornece um ambiente pré-configurado.

É um framework e uma plataforma para aplicações React universais. 

Conjunto de ferramentas e serviços construídos em torno de plataformas nativas e React Native para auxiliar a desenvolver, construir, implantar e iterar rapidamente em aplicativos iOS, Android e web a partir da mesma base de código JavaScript/TypeScript.

## Installing Expo globally on the machine:

`npm install --global expo-cli`

Verifying that the installation was successful:

`expo whoami`

## Templates

Há dois caminhos a seguir:

- **Managed Workflow**

    Gerencia todas as configurações automaticamente, mas sem o acesso aos diretórios "IOS" e "Android", caso seja necessário acessar pode-se fazer um "eject".

- **Bare Workflow**

    Gerencia todas as configurações automaticamente, mas libera o acesso aos diretórios "IOS" e "Android" onde se encontra o código nativo, permitindo assim customizações em qualquer um dos ambientes.

## To initialize the project:

`expo init app`

Choose a template!

## To start a development server:

`cd app`

`npm start` or `expo start`

## To run your project:

`npm run android` or `yarn android`

`npm run ios` or `yarn ios`

`npm run web`

## Expo GO

App disponibilizado para testar físicamente em ambiente mobile, desde que estejam na mesma rede.

# References
* [Environment Setup](https://reactnative.dev/docs/environment-setup)
* [docs.expo](https://docs.expo)
* [docs.expo.dev](https://docs.expo.dev)
* [expo.dev/client (Expo GO)](https://expo.dev/client)
* [snack.expo.dev](https://snack.expo.dev)