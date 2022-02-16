# Ambientes de Desenvolvimento CLI

É necessário realizar a criação e configuração de todo o ambiente manualmente.

Have an Android emulator running or a device connected.

## Install React Native:

`npm install react-native`

## Initializing the project:

`npx react-native init app`

ou

`npx react-native init app --template react-native-template-typescript`

Download template and install dependencies

## Running React Native application:

`cd app`

- **Step 1:** Start Metro Bundler

Metro é o bundler JavaScript que acompanha o React Native.

`npx react-native start` or `yarn start` or `npm start`

- **Step 2:** Run application

Deixe o Metro Bundler rodar em seu próprio terminal. 
Abra um novo terminal dentro da pasta do projeto React Native e execute o seguinte:

`npx react-native run-android` or `npm run android` or `yarn android`

# References
* [Environment Setup](https://reactnative.dev/docs/environment-setup)
* [developer.android.com/studio](https://developer.android.com/studio)
* [developer.android.com/studio/install](https://developer.android.com/studio/install)