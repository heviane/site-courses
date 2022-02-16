# Android Studio on Linux

## Configurar Variável de Ambiente

`echo "export ANDROID_HOME=$HOME/Android/Sdk" >> ~/.bashrc`

ou

`echo "export ANDROID_SDK=/home/heviane/Android/Sdk" >> ~/.bashrc`

## Run Android Studio

Comando **bash** para executar o shell script **studio.sh** no diretório de instalação do **~/android/android-studio/bin**

`bash studio.sh`

## Formas de Executar e Testas a App

- **Usando um dispositivo físico**
Se você tiver um dispositivo Android físico, poderá usá-lo para desenvolvimento no lugar de um AVD conectando-o ao computador usando um cabo USB e seguindo as [instruções aqui](https://reactnative.dev/docs/running-on-device).

- **Usando um dispositivo virtual**

Para criar um novo **AVD (Android Virtual Device)** vá para o **AVD Manager** em Tools/Device Manager.
Opção: **Create Virtual Device**
Seleciona um modelo que tenha **Play Store**.



Selecione "Criar dispositivo virtual...", escolha qualquer telefone da lista e clique em "Avançar" e selecione a imagem Q API Nível 29.





# Issues

## FAILURE: Build failed with an exception.

### What went wrong:
Could not determine the dependencies of task ':app:compileDebugJavaWithJavac'.
> SDK location not found. Define location with an ANDROID_SDK_ROOT environment variable or by setting the sdk.dir path in your project's local properties file at '/home/heviane/Github/dio-desafio-github/Course-React-Native/app04-npx/android/local.properties'

### Solution:
Go to your react-native Project then go to android directory.
Create a file with following name:

local.properties

Open the file and paste your Android SDK path like below:

sdk.dir = /home/USERNAME/Android/Sdk

Where USERNAME is your linux username(Linux paths are case-sensitive)


# References

* [developer.android.com/studio/install](https://developer.android.com/studio/install)
* [reactnative.dev/docs/running-on-device](https://reactnative.dev/docs/running-on-device)