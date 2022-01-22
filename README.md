# Prueba Tecnica



## Solucion

Es un proyecto sencillo que solo consta de un solo componente que en este caso tiene nombre de `users`, Aqui se hizo el diseño y se recibieron datos del `service`
que tambien fue creado para la elaboracion de funcionalidad del proyecto

[![Sin-t-tulo.png](https://i.postimg.cc/J00YnkfV/Sin-t-tulo.png)](https://postimg.cc/ZvkxsCYV)

Se hizo uso de 3 funciones para este proyecto:

    `obtenerUSer()`
    `senData()`
    `buscarUSer()`

Como sus nombre lo dicen, la primera funcion es para consumir la `API` y obtener los valores del `JSON` y guardarlos en un objeto
La segunda funcion la usamos para retornar los datos de la API y poder usarla en el componente de `users`
Y la funcion mas notoria de todas es la tercera que es donde se usa un poco mas de logica para buscar un usuario dependiendo de como lo busquemos,
Si es por nombre o email, ya depende de como se requiera buscar

## Ejecion del programa
Una vez ejecutado el programa se vere una interfaz con busqueda de usuario o correo electronico y a la derecha se vera el resultado de la busqueda, tambien se puede observar en la parte inferior todos los datos que estan en el `JSON` dado.

[![Sin-t-tulo.png](https://i.postimg.cc/rs66vgdZ/Sin-t-tulo.png)](https://postimg.cc/hz03mL1V)

La direccion de la `API` que fue usada en este caso es: `https://jsonplaceholder.typicode.com/users`, no se utilizo la `API` de `MOCKEN` ya que era una aplicacion de pagp


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.4.

