# Prueba Tecnica



## Solucion

Es un proyecto sencillo que solo consta de un solo componente que en este caso tiene nombre de `users`, Aqui se hizo el diseño y se recibieron datos del `service`
que tambien fue creado para la elaboracion de funcionalidad del proyecto


Se hizo uso de 3 funciones para este proyecto;

    `obtenerUSer()`
    `senData()`
   `buscarUSer()`

Como sus nombre lo dicen, la primera funcion es para consumir la `API` y obtener los valores del `JSON` y guardarlos en un objeto
La segunda funcion la usamos para retornar los datos de la API y poder usarla en el componente de `users`
Y la funcion mas notoria de todas es la tercera que es donde se usa un poco mas de logica para buscar un usuario dependiendo de como lo busquemos,
Si es por nombre o email, ya depende de como se requiera buscar



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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
