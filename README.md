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



