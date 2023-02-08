# MyProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## info about folder angular

De arriba hacia abajo:

     - node_modules: Todo proyecto de Javascript posee este directorio donde se almacenan las librerías y dependencias que se descarguen con NPM.
     - src: Directorio principal del proyecto donde encontramos:
          app: Directorio donde guardaremos todo el código fuente de Angular.
          assets: Directorio para imágenes y otros recursos que la app necesita.
          environments: Directorio de ambientes, por defecto viene con desarrollo y producción.
          favicon.ico: Ícono por defecto que tendrá la pestaña del navegador.
          index.html: Archivo HTML principal desde donde se construye toda la aplicación.
          main.ts: Archivo principal para la configuración de Angular.
          polyfills.ts: Librería para que Angular funcione en navegadores viejos y que la aplicación sea retro compatible.
          styles.scss: Archivo principal de estilos.
          test.ts: Archivo principal para lanzar el ambiente de pruebas de Angular.
     - .browserslistrc: Lista de navegadores y sus versiones que permite configurar la compatibilidad de la aplicación con cada uno.
     - .editorconfig: Permite autoformatear los archivos, espacios, indentación, etc. Hay que tener instalado la extensión en el editor.
     - .gitignore: Indicarle a GIT qué archivos/directorios ignorar.
     - angular.json: Archivo principal con toda la configuración del proyecto Angular.
     - karma.conf.js: Archivo de configuración de Karma. Karma es un task runner para correr pruebas unitarias.
     - package-lock.json: Describe el las dependencias exactas que se generaron en la instalación del proyecto.
     - package.json: Archivo para el manejo de dependencias, scripts y metadatos relevantes para el proyecto.
     - README.md: Archivo markdown para la documentación del proyecto.
     - tsconfig.app.json: Archivo principal para la configuración de TypeScript.
     - tsconfig.json: Extensión con más configuraciones de TypeScript.
     - tsconfig.spec.json: Configuración de TypeScript pero para el ambiente de pruebas.

## String interpolation
String interpolation es la manera de enviar datos desde nuestro componente hacia la vista. Utilizando el doble símbolo de llaves {{ }}, o también conocidos como brackets, puedes imprimir el valor de una variable, realizar operaciones matemáticas o hacer el llamado a una función dentro del código HTML.

      <h1>{{ 'Hola Platzi' }}</h1>
      <h2>1 + 1 = {{ 1 + 1 }}</h2>
      <h3>{{ myFunction(); }}</h3>

# Property Binding

Property Binding es la manera que dispone Angular para controlar y modificar las propiedades de los distintos elementos de HTML. Para esto, simplemente utiliza los corchetes [] para poder modificar dinámicamente ese atributo desde el controlador.

### Utilidades
    El atributo src de la etiqueta <img> para modificar dinámicamente una imagen.
    El atributo href de un <a> para modificar un enlace.
    El atributo value de un <input> para autocompletar un valor de un formulario.
    El atributo disable de un <input> para habilitar/deshabilitar un campo de un formulario.
    Si tienes en tu componente:

        @Component({
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        })
        export class AppComponent {
          empresa = 'Platzi';
          habilitado = true;
        }


## Introducción al Event Binding de Angular

A lo igual que el Property Binding nos permite modificar el valor de los atributos de los elementos HTML desde el controlador, el Event Binding permite controlar los eventos que suceden en estos elementos. El clic de un botón, detectar cambios en un campo, el envío de un formulario, entre otros eventos. Para esto utiliza los paréntesis () para el bindeo de la propiedad del elemento.

Si tienes en tu componente:

      @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss']
      })
      export class AppComponent {
        enviarFormulario() {
          // ...
        }
      }

Puedes ejecutar el método enviarFormulario() cuando se realiza un clic en un botón de la siguiente manera:

        <button (click)="enviarFormulario()" >
        Aporte creado por: Kevin Fiorentino.

### Otros eventos que puedes escuchar

Además del evento clic, seguramente el más utilizado, hay otros eventos como el change para detectar cambios en un campo de formulario, el evento scroll para detectar el desplazamiento horizontal/vertical del usuario en el navegador, onKeyUp o onKeyDown para detectar cuando el usuario aprieta o deja de apretar un botón de su teclado.

La importancia del Event Binding en Angular está dada por la posibilidad de comunicar el componente y la vista, el código TS con el código HTML, intercambiando datos entre ellos.

Puedes enviarle al controlador el evento completo que se produce en la vista. Para esto, solo declara un parámetro $event en el método que se encuentra escuchando el evento.

Tienes en el controlador:

    @Component({
      selector: 'app-root',
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.scss']
    })
    export class AppComponent {
      buttonClick($event: Event) {
        console.log($event);
      }
    }

Y en el HTML:

<button (onKeyUp)="buttonClick($event)">

El método buttonClick() que recibe como parámetro $event del tipo Event, en el HTML bindea el evento onKeyUp y el método recibe argumento $event con el símbolo de pesos delante para que Angular entienda que se trata de un evento.

De esta manera, puedes registrar cada pulsación del teclado imprimiendo por consola el evento producido por el usuario.

## Data binding con ngModel

El atributo ngModel permite el intercambio de datos de forma bidireccional entre el componente y la vista. Lo que suceda en el componente, se verá reflejado en la vista. Lo que se suceda en la vista, inmediatamente impactará en el componente.

<input [(ngModel)]="name">

ngModel usar tanto los corchetes [] como los paréntesis (). De esta manera, se vuelve bidireccional el intercambio de datos. Si no quieres la bidirección, solo colocamos los corchetes [ngModel] para que la comunicación sea unidireccional.Para utilizar ngModel, es necesario hacer uso e importar Angular Forms. Para esto, dirígete al archivo app.module.ts que es el módulo principal de toda aplicación Angular y agrega lo siguiente:

...
import { FormsModule } from '@angular/forms';

    @NgModule({
      declarations: [ ... ],
      imports: [
        FormsModule
      ],
      providers: [],
      bootstrap: [ ... ]
    })
    export class AppModule { }

De esta manera puedes importar el módulo FormsModule desde @angular/forms y agregarlo a imports para emplear la propiedad [(ngModel)].






## Bibliography angular


  - https://angular.io/guide/property-binding#property-binding-and-interpolation
  - https://angular.io/guide/binding-syntax/
  - https://angular.io/guide/event-binding
