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
* /.vscode
* /node_modules
* /src
* /TecMarketWeb (Frontend)
*.gitignore
* package-lock.json
* README.md

### Estructura del front
**FRONT**
======
* /public
* /src
	+ /api
		- product.tsx
	+ /assets
	+ /components
		- AddProducts.module.css
		- AddProducts.tsx
		- App.test.tsx
		- Home.module.css
		- Home.tsx
	+ App.tsx
	+ Footer.css
	+ Footer.tsx
	+ main.tsx
	+ nav.css
	+ setupTests.ts
	+ vite-env.d.ts
*.eslintrc.cjs
*.gitignore
* index.html
* package-lock.json
* package.json
* tsconfig.json
* tsconfig.node.json
* vit.config.ts


