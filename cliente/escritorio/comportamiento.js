window.onload = function() {
    // Llamar al servidor para obtener la lista de aplicaciones desde la base de datos
    let usuario = localStorage.getItem("crimson_usuario");
    console.log(usuario);
    if (usuario == undefined) {
        window.location = "../";
    } 

    let token = localStorage.getItem("crimson_token");
    if (token == undefined) {
        window.location = "../";
    }

    let nombre = localStorage.getItem("crimson_nombre");
    console.log(nombre);
    if (nombre == undefined) {
        window.location = "../";
    } else {
        // Mostrar el nombre del usuario en el HTML
        const nombreSpan = document.getElementById("nombre");
        nombreSpan.textContent = nombre;
    }


    fetch("../../servidor/?o=compruebatoken&token=" + token) 
    .then(response => {
          return response.json();                       // Quiero que el servidor me devuelva un json
        })
        .then(data => {
            console.log(data);
            if (data.resultado == "ok") {
                // Token válido, continuar con la ejecución
            } else {
                window.location = "../";
            }
        });

    fetch("../../servidor/?o=listadoaplicacionesusuario&usuario=" + usuario)
        .then(response => {
            return response.json(); // Convertir la respuesta del servidor en formato JSON
        })
        .then(data => {
            // Seleccionar el template HTML para las aplicaciones
            const plantilla = document.getElementById('plantilla_aplicacion');

            console.log(data); // Mostrar el JSON completo en la consola para depuración

            // Iterar sobre cada elemento recibido en el JSON
            data.forEach(function(elemento) {
                console.log(elemento); // Mostrar cada elemento individual en la consola

                // Crear una nueva instancia del template (clonarlo para cada aplicación)
                const instancia = plantilla.content.cloneNode(true);

                // Seleccionar un elemento específico dentro de la instancia (el párrafo <p>)
                const nombre = instancia.querySelector('p');

                // Asignar el nombre de la aplicación desde el JSON al contenido del párrafo
                nombre.innerHTML = elemento.nombre;

                // Seleccionar el elemento con la clase "icono" dentro de la instancia
                let icono = instancia.querySelector(".icono");

                // Establecer el contenido del icono como la primera letra del nombre de la aplicación
                icono.textContent = elemento.nombre[0];

                // Añadir la instancia al DOM dentro del elemento <main>
                document.querySelector('main').appendChild(instancia);
            });

            // Seleccionar todas las aplicaciones generadas dinámicamente
            let aplicaciones = document.querySelectorAll(".aplicacion");

            // Añadir un evento "onclick" a cada aplicación
            aplicaciones.forEach(function(aplicacion) {
                aplicacion.onclick = function() {
                    // Redirigir al usuario a una URL específica al hacer clic
                    localStorage.setItem('crimson_aplicacion', this.querySelector("p").textContent);
                    window.location = "../supercontrolador/";
                };
            });
        });

    document.querySelector("#cerrarsesion").onclick = function() {
        localStorage.removeItem("crimson_usuario");
        localStorage.removeItem("crimson_token");
        window.location = "../";
    };
};

document.addEventListener("DOMContentLoaded", function () {
    const btnNotificaciones = document.getElementById("btn-notificaciones");
    const contenedorNotificaciones = document.getElementById("notificaciones-container");
    const listaNotificaciones = document.getElementById("notificaciones-lista");
    const contadorNotificaciones = document.getElementById("contador-notificaciones");

    let totalNotificaciones = 0;

    // Función para obtener nuevas notificaciones
    function obtenerNotificaciones() {
        fetch("notificaciones.php")
            .then(response => response.json())
            .then(data => {
                data.forEach(notificacion => {
                    agregarNotificacion(notificacion.id, notificacion.mensaje, notificacion.tipo);
                });

                actualizarContador();
            })
            .catch(error => console.error("Error obteniendo notificaciones:", error));
    }

    // Función para agregar una notificación a la lista
    function agregarNotificacion(id, mensaje, tipo) {
        const notificacion = document.createElement("div");
        notificacion.classList.add("notificacion", tipo);
        notificacion.dataset.id = id;

        // Contenido de la notificación con el botón de eliminar en la parte superior derecha
        notificacion.innerHTML = `
            <button class="eliminar-notificacion" onclick="eliminarNotificacion(${id})">✖</button>
            <span>${mensaje}</span>
        `;

        listaNotificaciones.appendChild(notificacion);
        totalNotificaciones++;
        actualizarContador();
    }

    // Función para eliminar una notificación manualmente
    window.eliminarNotificacion = function (id) {
        const notificacion = document.querySelector(`.notificacion[data-id='${id}']`);
        if (notificacion) {
            notificacion.remove();
            totalNotificaciones--;
            actualizarContador();
        }
    };

    // Función para actualizar el contador de notificaciones
    function actualizarContador() {
        contadorNotificaciones.textContent = totalNotificaciones;
    }

    // Mostrar / ocultar la lista de notificaciones al hacer clic en la campanita
    btnNotificaciones.addEventListener("click", function () {
        contenedorNotificaciones.classList.toggle("oculto");
    });

    // Obtener nuevas notificaciones aleatorias cada 10 segundos
    setInterval(obtenerNotificaciones, 10000);

    // Cargar una notificación al inicio
    obtenerNotificaciones();
});
