# Sistema de Gestión Empresarial

## Descripción del Proyecto

APP8 es una aplicación web diseñada con una arquitectura cliente-servidor, proporcionando herramientas para la gestión de datos y usuarios mediante una API REST y un sistema modular. A continuación, se detalla cada una de las carpetas principales del proyecto.

---

## Estructura del Proyecto

```plaintext
APP8/
│── cliente/
│   │── bi/
    │── generar documento/
    │── subir archivo/
│   │── escritorio/
│   │── img/
│   │── inc/
│   │── supercontrolador/
│── servidor/
│── api/
│── documentacion/
│── utilidades/
│   │── importador/
```

### 1. Cliente (`cliente/`)
Esta carpeta contiene la interfaz de usuario y los archivos relacionados con el frontend de la aplicación.

- **`index.php`** - Página principal de inicio de sesión.
- **`estilologin.css`** - Archivo de estilos para el login.
- **`login.js`** - Script de validación del login.
- **`img/`** - Contiene los logos y recursos gráficos.
- **`inc/`** - Contiene archivos de seguridad como `blacklist.php`, `whitelist.php` y `geolocip.php`.
- **`bi/`** - Contiene archivos para ejecución de consultas y descargas.

---

### 2. Supercontrolador (`cliente/supercontrolador/`)
Este módulo maneja la lógica principal del cliente, centralizando operaciones y la carga de componentes dinámicos.

- **`index.php`** - Punto de entrada al panel de control.
- **`comportamiento.js`** - Contiene funciones para la manipulación del frontend.
- **`estilo.css`** - Estilos principales de la interfaz del supercontrolador.
- **`img/`** - Contiene iconos para diferentes acciones (borrar, imprimir, tabla, etc.).
- **`modulos/`** - Contiene las secciones funcionales del supercontrolador.
  - `cabecera/` - Gestiona la cabecera de la aplicación.
  - `navegacion/` - Maneja la barra de navegación.
  - `modal/` - Contiene los estilos y scripts para los modales.
  - `principal/` - Renderiza el contenido principal de la interfaz.

---

### 3. Escritorio (`cliente/escritorio/`)
Esta carpeta contiene los archivos responsables del entorno gráfico principal de la aplicación.

- **`index.html`** - Página de inicio del escritorio.
- **`comportamiento.js`** - Gestiona la interactividad de los elementos en el escritorio.
- **`estilo.css`** - Archivo de estilos del escritorio.
- **`img/`** - Contiene imágenes e íconos como el logo y el icono de sesión.

---

### 4. Servidor (`servidor/`)
Contiene la lógica backend de la aplicación, incluyendo la conexión con la base de datos y la configuración del servidor.

- **`ConexionDB.php`** - Clase para la conexión con la base de datos.
- **`config.php`** - Archivo de configuración con credenciales y parámetros globales.
- **`index.php`** - Punto de entrada del backend.

---

### 5. BI (`cliente/bi/`)
Esta carpeta contiene archivos relacionados con el procesamiento y análisis de información en la aplicación.

- **`download.php`** - Script para la descarga de archivos de datos.
- **`ejecuta.php`** - Contiene lógica para la ejecución de procesos en la BI.
- **`index.html`** - Página de referencia para el sistema de BI.

---

## 6. Editor de Documentos (`editor/`)
Este módulo permite la creación y edición de documentos en un entorno similar a Word. Incluye herramientas de formato, impresión y guardado en formato DOCX.

###  Archivos principales:
- **`index.html`** - Página principal del editor de documentos con una interfaz centrada en la edición de texto.
- **`comportamiento.js`** *(incluido en el HTML)* - Maneja funciones de edición, como aplicar negrita, cursiva, subrayado, cambiar la fuente y tamaño del texto.
- **`estilo.css`** *(dentro del HTML)* - Define la apariencia de la interfaz, con un diseño limpio y centrado en la experiencia de escritura.

---

## 7. Gestor de Archivos (`gestor/`)
Este módulo permite la gestión de archivos mediante una interfaz de **drag & drop**, además de listar, subir y eliminar archivos.

###  Archivos principales:
- **`index.html`** - Interfaz principal del gestor de archivos. Permite la subida, listado y eliminación de archivos.
- **`upload.php`** - Maneja la subida de archivos al servidor.
- **`list_files.php`** - Devuelve una lista de archivos almacenados en el servidor en formato JSON.
- **`delete.php`** - Permite la eliminación de archivos seleccionados.

###  Estructura de módulos:
- **`drop-area/`** - Sección de la interfaz para arrastrar y soltar archivos.
- **`file-list/`** - Muestra los archivos disponibles en el servidor.
- **`acciones/`** - Contiene los botones para descargar y eliminar archivos.

---

## Instalación y Configuración

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tu_usuario/APP8.git
   ```
2. Configurar la base de datos en `servidor/config.php`.
3. Ejecutar `importador` para cargar datos iniciales.
4. Configurar un servidor Apache o usar:
   ```bash
   php -S localhost:8000
   ```

---

## Uso de la Aplicación

1. Acceder a `cliente/index.php` para el login.
2. Ingresar al `supercontrolador` para administrar los datos.
3. Usar el escritorio para la navegación y gestión de información.
4. Consultar la BI para generación de reportes y análisis.

---



