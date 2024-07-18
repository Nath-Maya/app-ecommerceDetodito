# De Todito Store <img src="./icons/logo/logo-de-todito.png" alt="Logo de Ecommerce Detodito" width="70" />

![Repo Stats](https://github-readme-stats.vercel.app/api/pin/?username=Nath-Maya&repo=app-ecommerceDetodito)

![GitHub commit activity (branch)](https://img.shields.io/github/commit-activity/t/Nath-Maya/app-ecommerceDetodito/main) ![GitHub last commit (branch)](https://img.shields.io/github/last-commit/Nath-Maya/app-ecommerceDetodito/main) ![GitHub top language](https://img.shields.io/github/languages/top/Nath-Maya/app-ecommerceDetodito) ![GitHub repo size](https://img.shields.io/github/repo-size/Nath-Maya/app-ecommerceDetodito?color=red)



Es una aplicación móvil de comercio electrónico que esta desarrollada para dispositivo android, construida con **React Native y Expo**. Con un flujo de procesos desde la creación de usuario hasta la generación de una orden, de acuerdo a los productos seleccionados. 

## ☑️ Funciones y características 

✅    **Selección Personalizada:** Los productos pueden ser filtrados por categorías. 

✅    **Vista detallada** Cada producto tiene una descripcion de sus caracteristícas el cual se puede ver al presionar sobre cada producto. 

✅    **Agregar al carrito:** Al ver el detalle del producto, se puede agregar al carrito. 

✅    **Control del carrito:** Revisar los elementos agregados en cualquier momento en una lista completa junto con sus precios individuales y el total acumulado, y si es necesario, eliminar alguno de los productos en particular o cambiar la cantidad deseada. 

✅   **Ordenes:** Al confirmar lo contenido en el carrito se genera una orden. 

✅  **Autenticación de Usuarios:** Los usuarios pueden registrarse e iniciar sesión.

## 🛠️ Tecnologías & Lenguajes 

### 🛠️ Frameworks:

### ![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
Framework para desarrollar aplicaciones móviles utilizando React. Permite construir aplicaciones para iOS y Android usando el mismo código base de JavaScript y React.

### ![Expo](https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37)
Facilita el desarrollo y la construcción de aplicaciones React Native. Ofrece una serie de APIs y servicios que aceleran el desarrollo y el despliegue de aplicaciones móviles.

### 📚 Librerías:

### ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
Manejar el estado global de la aplicación de manera predecible y centralizada. Se utiliza para gestionar y compartir el estado entre los diferentes componentes de la aplicación.

### ![Firebase](https://img.shields.io/badge/firebase-a08021?style=for-the-badge&logo=firebase&logoColor=ffcd34)
Autenticación de los usuarios registrados y base de datos en tiempo real de los productos, categorias, ordenes e imagenes de cada perfil de usuario. 

### ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
Lenguaje de programación utilizado para manejar la lógica de la aplicación y construir los componentes de React Native.

### ![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)
En este proyecto, se utiliza para almacenar datos localmente en el dispositivo, para la persistencia de datos. 

### ![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white)
Gestión de formularios y validaciones, mejorando la experiencia del usuario y el rendimiento de la aplicación.

### ![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white)
En este proyecto, se utiliza para escribir la documentación de manera clara y legible.

 ## 💻 Instalación

 ### Requisitos previos:

 **Node.js y npm:** 
 
 - Node.js es un entorno de ejecución para JavaScript fuera del navegador, y npm es el gestor de paquetes para Node.js.
	 - Version de Node.js (LTS) - **v20.15.1**
	 -   **Windows/MacOS/Linux:** Descarga e instala Node.js desde [nodejs.org](https://nodejs.org/).
	 
 **Clonar el repositorio**
 ```
git clone https://github.com/Nath-Maya/app-ecommerceDetodito.git
cd app-ecommerceDetodito
```




**Instalar dependencias**

Ejecute el siguiente comando en la terminal, el cual instalara las dependencias contenidas en el package.json
```
npm install
```

**Iniciar el proyecto con Expo**

Ejecutar en la terminal el siguiente comando:
```
npm run start 
```
Seleccionar la opcion **a** para ejecutar el simulador android. 

![Expo](./icons/screens-shot/Captura%20de%20pantalla%202024-07-09%20a%20la(s)%203.02.51%20p.m..png)

### 📁 Estructura del proyecto

```plaintex

├── App.js
├── LICENSE
├── README.md
├── app.json
├── assets
├── babel.config.js
├── components
│   ├── AddButton.jsx
│   ├── CartItem.jsx
│   ├── Categories.jsx
│   ├── ItemCategory.jsx
│   ├── ListCategory.jsx
│   ├── Logout.jsx
│   ├── NotFoundModal.jsx
│   ├── OrderItem.jsx
│   ├── ProductItem.jsx
│   ├── ProductRating.jsx
│   ├── QuantitySelector.jsx
│   ├── RemoveButton.jsx
│   ├── SearchInput.jsx
│   └── TotalCart.jsx
├── config
│   └── theme.js
├── data
│   ├── cart.json
│   ├── category.json
│   ├── orders.json
│   └── products.json
├── database
│   ├── SQliteConfig.js
│   └── firebaseConfig.js
├── icons
├── navigation
│   ├── MainNavigator.js
│   ├── Routes.js
│   ├── StackAuth.js
│   ├── StackCart.js
│   ├── StackMyProfile.js
│   ├── StackOrders.js
│   ├── StackShop.js
│   ├── StackWelcome.js
│   └── TabNavigator.js
├── package-lock.json
├── package.json
├── redux
│   ├── auth
│   │   └── authSlice.js
│   ├── cart
│   │   └── cartSlice.js
│   └── shop
│       └── shopSlice.js
├── screens
│   ├── Cart.jsx
│   ├── Home.jsx
│   ├── ImageSelector.jsx
│   ├── ItemDetail.jsx
│   ├── ItemListCategory.jsx
│   ├── Login.jsx
│   ├── MyProfile.jsx
│   ├── Orders.jsx
│   ├── SignUp.jsx
│   └── Welcome.jsx
├── service
│   ├── authService.js
│   ├── shopService.js
│   └── userService.js
├── store
│   └── store.js
├── utils
│   ├── formatDate.js
│   └── formatPrice.js
└── validations
    ├── loginSchema.js
    └── signUpSchema.js
```

### 🔐 Licencia:

Este proyecto está licenciado bajo la Licencia MIT. Mira el archivo [LICENSE](./LICENSE) para más detalles.


### 🤝 Cómo Contribuir

Las contribuciones son bienvenidas. Por favor, abre un issue o envía un pull request para cualquier mejora o corrección.

- Fork el repositorio
- Crea una rama de la característica (git checkout -b feature/nueva-caracteristica)
- Commit tus cambios (git commit -m 'Añadir nueva característica')
- Push a la rama (git push origin feature/nueva-caracteristica)
- Abre un Pull Request

✨ ***Gracias por utilizar De Todito Store!*** ✨