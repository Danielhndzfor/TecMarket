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
### /.vscode
Configuración de Visual Studio Code para el proyecto.

### /node_modules
Carpeta que contiene las dependencias del proyecto instaladas con npm.

### /src
Carpeta que contiene el código fuente de la API.

### /TecMarketWeb (Frontend)
Carpeta que contiene el frontend de la aplicación.

###.gitignore
Archivo que especifica los archivos y carpetas que se deben ignorar en el repositorio de Git.

### package-lock.json
Archivo que contiene la información de las dependencias del proyecto y sus versiones.

### README.md
Archivo que contiene información general sobre el proyecto.

### Estructura del Front
**FRONT**
======
### /public
Carpeta que contiene los archivos estáticos de la aplicación.

### /src
Carpeta que contiene el código fuente del frontend.

#### /api
Carpeta que contiene los archivos de la API del frontend.

##### product.tsx
Archivo que contiene la lógica de la API para productos.

#### /assets
Carpeta que contiene los archivos de recursos de la aplicación (imágenes, fuentes, etc.).

#### /components
Carpeta que contiene los componentes de React de la aplicación.

##### AddProducts.module.css
Archivo de estilos CSS para el componente AddProducts.

##### AddProducts.tsx
Archivo que contiene la lógica del componente AddProducts.

##### App.test.tsx
Archivo que contiene pruebas para el componente App.

##### Home.module.css
Archivo de estilos CSS para el componente Home.

##### Home.tsx
Archivo que contiene la lógica del componente Home.

### App.tsx
Archivo que contiene la lógica del componente App.

### Footer.css
Archivo de estilos CSS para el pie de página.

### Footer.tsx
Archivo que contiene la lógica del pie de página.

### main.tsx
Archivo que contiene la lógica principal de la aplicación.

### nav.css
Archivo de estilos CSS para la navegación.

### setupTests.ts
Archivo que contiene la configuración de las pruebas.

### vite-env.d.ts
Archivo que contiene la configuración del entorno de desarrollo.

###.eslintrc.cjs
Archivo que contiene la configuración de ESLint para el proyecto.

###.gitignore
Archivo que especifica los archivos y carpetas que se deben ignorar en el repositorio de Git.

### index.html
Archivo que contiene el punto de entrada de la aplicación.

### package-lock.json
Archivo que contiene la información de las dependencias del proyecto y sus versiones.

### package.json
Archivo que contiene la información del proyecto y sus dependencias.

### tsconfig.json
Archivo que contiene la configuración del compilador de TypeScript.

### tsconfig.node.json
Archivo que contiene la configuración del compilador de TypeScript para Node.js.

### vit.config.ts
Archivo que contiene la configuración de Vite para el proyecto.


