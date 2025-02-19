// Crear un elemento div para el tooltip y asignarle la clase "bjtooltip"
let bjtooltip = document.createElement("div");
bjtooltip.classList.add("bjtooltip");

// Añadir el tooltip al cuerpo del documento
document.querySelector("body").appendChild(bjtooltip);

// Función para actualizar la posición del tooltip cuando el mouse se mueve
document.onmousemove = function(e) {
    // Ajustar la posición del tooltip en función de la posición del mouse
    bjtooltip.style.left = e.pageX + "px";
    bjtooltip.style.top = e.pageY + "px";
};

// Función para manejar el evento "mouseover" en el documento
document.onmouseover = function(event) {
    // Obtener el elemento sobre el que se encuentra el mouse
    const element = event.target;

    // Verificar si el elemento tiene el atributo "bjtooltip"
    if (element.hasAttribute("bjtooltip")) {
        // Mostrar el tooltip y actualizar su contenido
        bjtooltip.style.display = "block";
        bjtooltip.textContent = element.getAttribute("bjtooltip");
    } else {
        // Ocultar el tooltip si el elemento no tiene el atributo "bjtooltip"
        bjtooltip.style.display = "none";
    }
};



// Este código crea un tooltip dinámico, que sigue el cursor y muestra información adicional cuando el mouse pasa sobre elementos específicos que tienen un atributo llamado bjtooltip. Aquí está explicado de manera resumida:

// Crear el tooltip:

// Se crea un elemento div con la clase bjtooltip para usarlo como el contenedor del tooltip.
// Este div se agrega al cuerpo del documento para que esté disponible globalmente.
// Actualizar la posición del tooltip:

// Cada vez que el mouse se mueve (onmousemove), la posición del tooltip se ajusta para seguir al cursor.
// La posición se calcula usando las coordenadas del mouse (e.pageX y e.pageY).
// Mostrar y ocultar el tooltip:

// Cuando el mouse pasa sobre un elemento (onmouseover), se verifica si el elemento tiene el atributo bjtooltip.
// Si lo tiene:
// Se muestra el tooltip (display: block) y su contenido se actualiza con el valor del atributo bjtooltip del elemento.
// Si no lo tiene:
// Se oculta el tooltip (display: none).