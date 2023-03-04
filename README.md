# (Front) sistema de vacunación de empleados 

Es un sistema de registro de vacunación de empleados, que maneja dos roles (Admin y Empleado). 

Un usuario admin podrá:
-   Ver todos los Empleados y filtrar por : 
    - Tipo de Vacuna
    - Rango de Fecha
    - Por si están Vacunados o no
- Crear un nuevo Empleado
- Editar Empleado
- Eliminar un Empleado

Un empleado puede ver únicamente su perfil

## Tech Stack

El front está realizado con ReactJS, principalmente fue creado el proyecto usando [Create React App](https://github.com/facebook/create-react-app)

- ReactJS
- React Router Dom
- Tailwind

Para el testing se está usando:
- Jest
- React Test Library

Librerías externas:
- [React Date Picker](https://reactdatepicker.com/)
- [React Select](https://react-select.com/)
- Para simular el Backend se está usando la librería [JSON-SERVER](https://www.npmjs.com/package/json-server)

Se está usando las versiones:
Node - v14.21.2
ReactJS - v18

## Cómo ejecutar la Aplicación

1. Clonar repositorio desde el github
2. Ejecutar `npm install`
3. Instalar JSON-SERVER `npm install -g json-server`
4. Iniciar el servidor del backend con el siguiente comando `json-server --watch ./mockDB/db.json --port 3002`
5. Ejecutar React con `npm start`

### Arquitectura del Código

```css
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
       └── vaccines.helpers.js

```


La carpeta **src** está dividida en 3 partes:

- **Components:**
La carpeta está organizada siguiendo los principios de atomic design, lo que significa que se organizan desde los componentes más pequeños y sencillos hasta los más complejos.
Por ejemplo, en la carpeta de **atoms** se pueden encontrar los inputs, labels, app icon, error span, etc. 
Luego, con la unión de ellos, se puede formar **molecules**, como Form field, Form select field, etc. 
Con estos, se pueden formar **organisms**, componentes un poco más complejos que los anteriores, tales como un Menú, Tablas, etc. 
A continuación, tenemos **templates**, donde ya tenemos estructuras que serán utilizadas en las páginas. 
Por último, los **pages** son nuestras páginas finales que implementan los componentes interiores.

- **Context:**
En esta carpeta se encontrarán los context que creamos, los cuales son información que podemos pasar a lo largo de nuestra app sin necesidad de pasar por los props. Se ha creado solo el **userauth.jsx**, que es el responsable de guardar los datos del usuario en sesión. Para la persistencia de estos datos en los reloads, se almacenan en el LocalStorage. Es decir, que cuando inicie la App, esta verificará si ya se encuentra un usuario almacenado en el LocalStorage, y si no, lo iniciará en nulo.
**Nota**: es importante no crear context de todos los datos, ya que al cambiar este, se volverá a renderizar los componentes que instancian el contexto.

- **Helpers:**
Se ha creado esta carpeta para separar toda la lógica de negocio fuera de los componentes, y estos solo llamen las funciones que necesiten. Con esto logramos una arquitectura más limpia y menos repetición de código. No se utilizó una librería de manejo de estados para este caso debido al tamaño del proyecto. Separar esta sección de los componentes es la solución más adecuada para las necesidades del proyecto. Luego, migrar esto a un manejador de estados será más sencillo.

### Coverage del código
Se han generado pruebas unitarias y de integración. Se ha creado casi un archivo por cada componente o función que se encuentra en el código.

- Jest: pruebas unitarias.
- React Test Library: pruebas de integración.

Para ejecutar los tests, puedes utilizar `npm run test`. 
Para ejecutar los tests con la tabla de cobertura, utiliza `npm run test -- --coverage .`

<img src="public\images\coverage_table.png"/>
#### Pre-commit hooks

Los pre-commit hooks son scripts que se ejecutan automáticamente antes de cada confirmación de Git. Estos scripts se utilizan para realizar diversas comprobaciones y pruebas en el código, para garantizar que se cumplan ciertas normas de calidad y para prevenir la confirmación de código con errores.

Para configurar y utilizar los pre-commit hooks en este proyecto, sigue estos pasos:

1. Copia el archivo `pre-commit` de este repositorio en la carpeta `.git/hooks` de tu repositorio local.
2. Asegúrate de que el archivo `pre-commit` tenga permisos de ejecución. Si no, ejecuta el comando `chmod +x .git/hooks/pre-commit`.

A continuación se podra ver el pre-commit configurado

```
#!/bin/bash

# Check for any files with debugging code
if git diff --cached | grep -E '^(<<<<<<<|>>>>>>>)' >/dev/null; then
    echo "Error: Commit contains merge conflict markers. Please resolve and try again."
    exit 1
fi

# Run test script using npm
if ! CI=true npm run test >/dev/null; then
    echo "Error: Tests failed. Please fix and try again."
    exit 1
fi

# If all checks pass, allow the commit to proceed
exit 0
```
<img src="public\images\preCommit.png"/>