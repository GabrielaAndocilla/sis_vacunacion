# (Front) sistema de vacunación de empleados 

Es un sistema de registro de vacunación de empleados, que maneja dos roles (Admin y Empleado). 

Un usuario admin podrá:
-   Ver todos los Empleados y filtar por : 
    - Tipo de Vacuna
    - Rango de Fecha
    - Por si están Vacunados o no
- Crear un nuevo Empleado
- Editar Empleado
- Eliminar un Empleado

Un empleado puede ver únicamente su perfil

## Tech Stack

El front esta realizado con reactJs principalmente, fue creado el proyecto usando [Create React App](https://github.com/facebook/create-react-app)

- ReactJS
- React Router Dom
- Tailwind

Para el testing se esta usando
- Jest
- React Test Library

Libraría externas
- [React Date Picker](https://reactdatepicker.com/)
- [React Select](https://react-select.com/)
- Para simular el Backend se está usando la libreria [JSON-SERVER](https://www.npmjs.com/package/json-server)

Se esta usando las versiones
Node - v14.21.2
ReactJS - v18

## Como ejecutar la Aplicación

1. Clonar repositorio desde el github
2. Ejecutar `npm install`
3. Instalar JSON-SERVER `npm install -g json-server`
4. Iniciar el servidor del backend con el siguiente comando `json-server --watch ./mockDB/db.json --port 3002`
5. Ejecutar React con`npm start`


### Arquitectura del Código

```
├── mockDB
│   └── db.json
└── src
   ├──── components
   │       ├── atoms
   │       ├── molecules
   │       ├── organism
   │       ├── templates
   │       └── pages
   ├── context
   └── helpers
       ├── helpers.js
       ├── user.helpers.js
       └── vacinnes.helpers.j
```


La carpeta **src** esta divida en 3 partes :
- **Components:**
    La carpeta esta organizada siguiendo los principios de atomic design lo que trata es organizar desde los componentes más pequeños y sencillos hasta los más                 complejos.

    Por ejemplo en la carpeta de **atoms** se puede encontrar los inputs, labels, app icon, error span , etc ... 
    Luego con la únion de ellas se podrá formar **molecules**, lo que podemos tener como Form field, Form select field, etc ...
    Con estos se puede formar **organism** un componente un poco más complejo al anterior, tales como un Menú, Tablas, etc ...
    A continua tenemos **templates** donde ya tenemos unas estructuras que serán usadas en los pages
    Por último los **pages** ya son nuestras páginas finales que implementan los componentes interiores
- **Context:**
    En esta carpeta se encontrará los context que creemos, los context es información que podemos pasar a lo largo de nuestra app sin necesidad de pasar por los props.
    Se tiene creado solo el **userauth.jsx** que es el remponsable de guardar el Dato del usuario en sesión. Para la persistencia de este dato en los reload se la esta almacenando en el LocalStorage, es decir, que cuando inicie la App esta chequeará si ya se encuentra un usuario almacenado en LocalStorage, sino simplemente lo iniciará en nulo.
    ** Nota: es importante no crear context de todos los datos, ya que cuando este cambia, se re-renderiza los componentes que instancia al contexto
- **Helpers:**
    Se ha creado esta carpeta para separar toda la lógica de negocio fuera de los componentes, y estos solo llamen las funciones que necesiten. Con esto logramos una arq. más limpia y menos repetición de código. 
    No se utilizó una librería de manejo de estados para este caso por el tamaño del proyecto, separado esta sección de los componentes es la solución más adaptáda para las necesidades del proyecto.
    Luego migrar esto a un manejador de estados será más sencillo

### Coverage del código

Se generó pruebas unitarias coomo de integración. Se creo casi un archivo por cada Componente o función que se encuentra en el código. 
- Jest - pruebas unitaria
- React Test Library - pruebas de integración

Para la ejcución de los test podemos ejecutar `npm run test`
Para la ejcución de los test con la tabla del coverage ejecutar `npm run test -- --coverage .`

<img src="public\images\coverage_table.png"/>
