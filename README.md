# practica_7_Node_express

![Node Logo](./assets/express%20nodelogo.png)


### 15 de Agosto del 2023

<hr>


## Requerimientos
1. Registrar un nuevo koder[POST/Koders]
2. Listar todos los koders[GET/Koders]
3. Eliminar Koders por nombre[DELETE/Koders/:name]
4. Eliminar todos los koders [DELETE/Koders]

## Este servidor debe:

1. Usar un archivo .json como base de datos
2. Recibir los datos por http por medio de la URL o el body 
3. Cada ruta debe responder un json
4. La tarea debe entregarse por medio de un repositorio git

<hr>

## Pasos a seguir para cumplir los requerimietos:


### 1.- Crear el repositorio, el README y el archivo README.ms e index.js.
### Se asegura de ignorar la carpeta node_modules por medio del comando .gitignore y dentro de esta carpeta se usa el comando node_modeles/ para asegurar que la carpeta será ignorada al momento de subir el archivo a github.
#### crear commit

### 2.- Importar las dependencias:
###  Instala las dependencias necesarias usando npm install express, fs (file system). estas pueden estar en las variables fs y express. usar los scripts start y dev en el archivo json.
#### crear commit 

### 3.- Configurar el servidor:
### se configura el servidor localhost8080 y se puede poner a escuchar por medio de la opcion listen a la variable express.
#### crear commit

### 4.- Definir la base de datos (archivo .json):
### Crea un archivo koders.json en la misma carpeta que el script.
#### crear commit

### 5.- Registrar un nuevo koder [POST /Koders]:
### se usa el request para saber que si se post entonces se debe de ejecutar la función de crear koder. 
### se pude usar fs.writeFileSync para escribir en el archivo de texto jason por lo que quizas necesite usar stringify o .JSON.
#### crear commit

### 6.- Listar todos los koders:
### para listar a todos los koders se necesita tener acceso a la lectura del archivo koders.json y dar en respuesta el archivo.
#### crear commit.

### 7.- Eliminar Koders por nombre [DELETE/Koders/:name]:
### Para crear la función Eliminar koder por nombre requiere acceder a al nombre del koder por medio de la opción requiere.params.name y usar un méthodo filter para agregar a todos los koders que nom cumplan con el parametro buscado en una nueva variable o reasignaciónde la variable.
#### crear commit.

### .8 Eliminar a todos los koders[Delete/Koders]:
### Iniciar el servidor se inicializa como servidor localhost: 8080.
#### crear commit.

### 9.- Validacón de las funciones.
### Usar insomnia para realizar las peticiones de GET y POST 
### Recordar usar el body con la opción JSON para incluir a cada koder en el archivo create koders.
#### crear commit, merge a main y compartir archivo. 

