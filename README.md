# PizzApp
## Instrucciones de uso
El proyecto esta realizado en *Angular*. La base de datos esta implementada en *Firestore de Firebase*
### NodeJS
Para instalar *Angular* es necesario tener *NodeJS*.
Se puede descargar *NodeJS* desde su página princial https://nodejs.org/es/
### Angular
Para desplegar la pagina web es necesario instalar el CLI de Angular *(Angular CLI)*, esto se hara por medio de *NodeJS* mediante la consola de comandos  
npm install -g @angular/cli  
### Inicializacion del proyecto  
Luego de clonar el repositorio se iniciara el proyecto de angular, se dirigira a la carpeta donde clono el repo, allí mediante la consola de comandos ejecutara:  
npm install   

*Firebase*  
Antes de ejecutar el proyecto es necesario instalar Firebase en Angular, para ello ejecutar en consola:  
npm install firebase @angular/fire --save   

*PWA*  
Tambien es necesario instalar PWA (Lo que permite  instalarla como aplicación)  
ng add @angular/pwa  

Para inicializar el proyecto:  
ng serve   

Ahora podra ver la página web en http://localhost:4200/  


# PizzApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
