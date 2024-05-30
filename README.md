# TecMarket

TecMarket es una aplicación de compra y venta de productos entre personas de educación superior. Esta app permite publicar productos en la base de datos y observarlos en la página principal. Utilizamos React y TypeScript, y también creamos una API con Express y JavaScript de la cual se alimenta la app.

## Contenidos
- [Instalación](#instalación)
- [Descripción del Proyecto](#descripción-del-proyecto)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Uso del Proyecto](#uso-del-proyecto)
- [Prototipos de la Vista](#prototipos-de-la-vista)
- [Descripción de las Pruebas](#descripción-de-las-pruebas)
- [Dependencias](#dependencias)

## Instalación

Para instalar y configurar TecMarket, sigue estos pasos:

1. Clona el repositorio desde GitHub:
    ```bash
    git clone https://github.com/Danielhndzfor/TecMarket.git
    ```

2. Navega al directorio del proyecto:
    ```bash
    cd TecMarketBack
    ```

### Instalación de la API

3. Navega al directorio de la API:
    ```bash
    cd TecMarketBack
    ```

4. Instala las dependencias necesarias:
    ```bash
    npm install
    ```

5. Inicia la API:
    ```bash
    npm run dev
    ```

### Instalación del Front-end

6. Navega al directorio del front-end:
    ```bash
    cd TecMarketWeb
    ```

7. Instala las dependencias necesarias:
    ```bash
    npm install
    ```

8. Inicia el proyecto:
    ```bash
    npm run dev
    ```

Con estos pasos, deberías tener tanto la API como el front-end de TecMarket en funcionamiento.

## Descripción del Proyecto

TecMarket es una aplicación web que permite a los estudiantes de educación superior comprar y vender productos entre sí. La aplicación se divide en dos partes: la API y el front-end.

La API es responsable de manejar las solicitudes y respuestas de la aplicación, así como de interactuar con la base de datos. Está construida con Express y JavaScript.

El front-end es la interfaz de usuario de la aplicación, donde los usuarios pueden publicar productos, ver los productos publicados por otros usuarios y realizar compras. Está construido con React y TypeScript.

La aplicación utiliza una base de datos para almacenar la información de los productos y los usuarios. La base de datos es accedida a través de la API.


## Estructura del Proyecto

### Estructura de la API

**API**
====

- `/.vscode`: Carpeta que puede contener archivos de configuración específicos de Visual Studio Code.
- `/images`: Carpeta que puede contener imagenes especificas para el archivo de `README.md`.
- `/node_modules`: Carpeta que contiene todas las dependencias del proyecto instaladas a través de npm.
- `/src`: Carpeta principal del código fuente de la API.
- `/TecMarketWeb`: Carpeta que contiene el código del frontend de la aplicación.
- `.gitignore`: Archivo que especifica los archivos y directorios que Git debe ignorar.
- `package-lock.json`: Archivo generado automáticamente que registra las versiones exactas de todas las dependencias npm instaladas.
- `README.md`: Archivo de documentación principal del proyecto.

### Estructura del front

**FRONT**
======

- `/public`: Carpeta que contiene los archivos estáticos que se servirán públicamente, como HTML, imágenes, etc.
- `/src`: Carpeta principal del código fuente del frontend.
    + `/api`: Carpeta que contiene los archivos relacionados con la comunicación con la API, como `product.tsx`.
    + `/assets`: Carpeta que puede contener recursos estáticos como imágenes, fuentes, etc.
    + `/components`: Carpeta que contiene los componentes de React de la aplicación.
        - `AddProducts.module.css`: Archivo de estilos para el componente `AddProducts`.
        - `AddProducts.tsx`: Componente React para agregar productos.
        - `App.test.tsx`: Archivo de pruebas para el componente principal de la aplicación.
        - `Home.module.css`: Archivo de estilos para el componente `Home`.
        - `Home.tsx`: Componente React para la página de inicio.
    - `App.tsx`: Componente principal de la aplicación.
    - `Footer.css`: Archivo de estilos para el footer de la aplicación.
    - `Footer.tsx`: Componente React para el footer de la aplicación.
    - `main.tsx`: Archivo principal de punto de entrada de la aplicación.
    - `nav.css`: Archivo de estilos para la navegación de la aplicación.
    - `setupTests.ts`: Archivo de configuración para las pruebas.
    - `vite-env.d.ts`: Archivo de definición de tipos para Vite.
- `.eslintrc.cjs`: Archivo de configuración de ESLint en formato CommonJS.
- `.gitignore`: Archivo que especifica los archivos y directorios que Git debe ignorar.
- `index.html`: Archivo HTML principal de la aplicación.
- `package-lock.json`: Archivo generado automáticamente que registra las versiones exactas de todas las dependencias npm instaladas.
- `package.json`: Archivo de configuración de npm que contiene las dependencias y scripts del proyecto.
- `tsconfig.json`: Archivo de configuración de TypeScript.
- `tsconfig.node.json`: Archivo de configuración de TypeScript específico para Node.js.
- `vit.config.ts`: Archivo de configuración de Vite.


## Prototipos de las Vistas

### Home o Dashboard

La vista principal de la aplicación se denomina Home o Dashboard. Aquí se presentan las tarjetas de los productos publicados, que constituyen el elemento principal de la aplicación.

Esta vista es la pantalla inicial al acceder a la aplicación. Se compone de los siguientes elementos:

- **Navbar**: Contiene el logo de la aplicación y el menú de navegación.
- **Content**: En esta sección se encuentra:
  - **Barra de búsqueda**: Permite a los usuarios buscar productos por palabras clave.
  - **Filtro de productos**: Permite a los usuarios filtrar los productos por diferentes criterios, como categoría, precio, etc.
  - **Tarjetas de productos**: Cada tarjeta de producto contiene:
    - **Icono de reporte**: Permite a los usuarios reportar un producto si es necesario.
    - **Icono de me gusta**: Permite a los usuarios expresar interés en un producto.
    - **Imagen del producto**: Representa visualmente el producto anunciado.
    - **Título del producto**: Describe brevemente el producto.
    - **Precio del producto**: Indica el costo del producto.
    - **Rating**: Muestra la calificación del producto.
    - **Botón "Ver más"**: Aunque no tiene funcionalidad por el momento, este botón permitirá a los usuarios ver más detalles del producto.
- **Footer**: Contiene los derechos reservados en el año actual.

Esta vista proporciona a los usuarios una visión general de los productos disponibles y les permite navegar y explorar fácilmente la plataforma.

![Vista Dashboard](/images/vista1.png)


### Agregar un Producto

Esta vista tiene una estructura similar al Home o Dashboard, con el mismo navbar en la parte superior. En el contenido de esta vista, se encuentra un título que indica "Agregar un Producto".

#### Formulario para agregar un producto:

1. **Título**: Campo de texto para ingresar el título del producto.
2. **Descripción**: Área de texto para ingresar una descripción detallada del producto.
3. **Precio**: Campo de texto para ingresar el precio del producto.
4. **Stock**: Campo de texto para ingresar la cantidad disponible en stock.
5. **Tipo de entrega**: Selección de opciones para elegir el tipo de entrega del producto (por ejemplo, envío a domicilio, retiro en tienda, etc.).
6. **Condición**: Selección de opciones para indicar la condición del producto (nuevo, usado, reacondicionado, etc.).
7. **Categoría**: Selección de opciones para elegir la categoría a la que pertenece el producto.
8. **Subir imagen**: Área para subir la imagen del producto.
9. **Botones**:
    - **Cancelar**: Botón que permite cancelar la acción y regresar a la vista principal (Home o Dashboard).
    - **Publicar**: Botón que permite enviar los datos del formulario a la base de datos, realizando una operación de tipo POST.

Esta vista proporciona a los usuarios la capacidad de agregar nuevos productos a la plataforma de manera fácil y rápida mediante un formulario intuitivo.

![Vista Publicar](/images/vista2.png)


### Cómo utilizar las vistas

#### Vista Home o Dashboard

1. **Acceso a la vista**: Al iniciar la aplicación, serás redirigido automáticamente a la vista Home o Dashboard.
2. **Exploración de productos**: En esta vista, puedes explorar los productos disponibles en la plataforma.
3. **Navegación**: Utiliza el navbar en la parte superior para navegar a otras secciones de la aplicación.
4. **Búsqueda y filtrado**: Utiliza la barra de búsqueda y los filtros disponibles para encontrar productos específicos según tus necesidades.
5. **Interacción con productos**: Puedes interactuar con cada tarjeta de producto, reportando un producto si es necesario o expresando interés con el botón de "Me gusta".
6. **Visualización detallada**: Aunque no está implementado por el momento, puedes hacer clic en el botón "Ver más" para ver detalles adicionales del producto.

#### Vista Agregar un Producto

1. **Acceso a la vista**: Desde la vista Home o Dashboard, utiliza la navegación para acceder a la opción de "Agregar un Producto".
2. **Completa el formulario**: Rellena el formulario con la información del producto que deseas agregar, incluyendo título, descripción, precio, stock, tipo de entrega, condición y categoría.
3. **Sube una imagen**: Adjunta una imagen del producto utilizando la función de carga de imágenes.
4. **Opciones de publicación**: Puedes elegir entre "Cancelar" para descartar la operación y regresar a la vista principal, o "Publicar" para enviar los datos del formulario y agregar el producto a la base de datos.


## Descripción de las Pruebas
Para las pruebas en TecMarket, utilizamos las herramientas Vite y React Testing Library.

El archivo donde se realizan las pruebas se llama `App.test.tsx` y se encuentra ubicado en `TecMarketWeb/src/components/App.tests.tsx`.

En estas pruebas, nos enfocamos en verificar el correcto funcionamiento de los componentes y la interacción con la API. Probamos diferentes escenarios y casos de uso para asegurarnos de que la aplicación se comporte como se espera.

Utilizamos React Testing Library para simular interacciones de usuario y realizar aserciones sobre el estado y el contenido de los componentes. Esto nos permite validar que los componentes se rendericen correctamente y respondan adecuadamente a las acciones del usuario.

Además, utilizamos Vite para ejecutar las pruebas de forma rápida y eficiente, proporcionando un entorno de desarrollo optimizado para pruebas unitarias.

En resumen, las pruebas en TecMarket se realizan con Vite y React Testing Library, utilizando el archivo `App.test.tsx` ubicado en `TecMarketWeb/src/components/App.tests.tsx`. Estas pruebas nos permiten verificar el correcto funcionamiento de los componentes y la interacción con la API.

1. **Librerías Importadas:**

Las siguientes librerías han sido importadas para las pruebas:

- **React**: Esta librería es necesaria para crear componentes y realizar pruebas sobre ellos.
- **@testing-library/react**: Se utiliza para renderizar componentes React en el entorno de prueba y realizar aserciones sobre su comportamiento y apariencia.
- **react-router-dom**: Se utiliza para simular el enrutamiento en las pruebas de componentes que utilizan React Router.
- **vitest**: Esta librería se utiliza para realizar mocks y facilitar la escritura de pruebas unitarias y de integración.

![Librerias](/images/TestLibrerias.png)

2. **Mocks:**

Se han creado los siguientes mocks para simular el comportamiento de las funciones de la API y los datos de productos:

- **Mockeo de Funciones de la API**:
  - Se utiliza `vi.mock('../api/products')` para simular el comportamiento de las funciones de la API de productos.
  - `addProductRequest` y `getProducts` se asignan como funciones mock de las respectivas funciones de la API para simular el envío y la obtención de datos de productos.

Estos mocks se utilizan para simular la interacción con la API y verificar el comportamiento esperado de los componentes en diferentes situaciones.

![Mocks](/images/TestMock.png)

3. **Verificación de que los datos se recuperan y se muestran correctamente en el Dashboard (Home.tsx):**

   - Este caso de prueba se refiere al test dentro de `Home Component`.
   - Asegura que los datos de los productos se recuperen correctamente y se muestren en el Dashboard.
   - No implica ninguna simulación de interacción del usuario.

![Home Test](/images/TestHome.png)

4. **Verificación de que los datos del formulario se envían correctamente al servicio web desde el formulario (AddProducts.tsx):**

   - Este caso de prueba se refiere al test dentro de `AddProduct Component`.
   - Asegura que los datos ingresados en el formulario se envíen correctamente al servicio web.
   - Simula el envío del formulario y verifica que la solicitud al servicio web se realice correctamente, esperando una respuesta positiva.

![AddProduct Test](/images/TestAddProduct.png)

## Ejecución de pruebas

La forma de ejecutar una prueba es abrir la termina en la carpeta principal del proyecto y escribir el siguiente comando:

    ```bash
    npm test
    ```

### Dependencias

#### Dependencias de Producción

- **react**: Librería para construir interfaces de usuario.
- **react-dom**: Paquete para trabajar con el DOM en aplicaciones React.
- **react-router-dom**: Enrutador para aplicaciones web de React.
- **axios**: Cliente HTTP para realizar peticiones a la API.

Estas son las dependencias esenciales para el funcionamiento de la aplicación en producción.

#### Dependencias de Desarrollo

- **typescript**: Lenguaje de programación que se basa en JavaScript y añade tipos estáticos.
- **@types/react**: Tipos de TypeScript para React.
- **@types/react-dom**: Tipos de TypeScript para React DOM.
- **@types/react-router-dom**: Tipos de TypeScript para React Router DOM.
- **@testing-library/react**: Herramientas para probar componentes de React.
- **jest**: Framework de pruebas de JavaScript.
- **vitest**: Framework de pruebas para Vite.

Estas son las dependencias utilizadas durante el desarrollo de la aplicación para realizar pruebas y asegurar la calidad del código.

