// Inicialización de variables
let lista = document.getElementById("lista");
let elementos = []; // Array para almacenar los elementos de la lista
let indiceSeleccionado = -1; // Índice del elemento seleccionado

// Función para actualizar la lista de elementos y seleccionar el primer elemento
function actualizarElementos() {
    elementos = Array.from(lista.getElementsByTagName("li"));
    if (elementos.length > 0) {
        seleccionarElemento(0); // Selecciona el primer elemento por defecto
    }
}

// Función para seleccionar un elemento de la lista
function seleccionarElemento(indice) {
    if (elementos.length > 0) {
        if (indiceSeleccionado >= 0) {
            elementos[indiceSeleccionado].classList.remove("seleccionado");
        }

        indice = Math.max(0, Math.min(indice, elementos.length - 1));
        elementos[indice].classList.add("seleccionado");
        indiceSeleccionado = indice;
    }
}

// Manejo de eventos de teclado para navegar por la lista
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") {
        seleccionarElemento(indiceSeleccionado + 1);
    } else if (e.key === "ArrowUp") {
        seleccionarElemento(indiceSeleccionado - 1);
    } else if (e.key === "Enter" && indiceSeleccionado >= 0) {
        document.getElementById("campo").value = elementos[indiceSeleccionado].textContent;
        lista.style.display = 'none';
    }
});

// Función para obtener códigos y actualizar la lista de sugerencias
function getCodigos() {
    let inputCP = document.getElementById("campo").value;
    let lista = document.getElementById("lista");

    if (inputCP.length > 0) {
        let url = "inc/getCodigos.php";
        let formData = new FormData();
        formData.append("campo", inputCP);

        fetch(url, {
            method: "POST",
            body: formData,
            mode: "cors"
        }).then(response => response.json())
            .then(data => {
                lista.style.display = 'block';
                lista.innerHTML = data;
                actualizarElementos(); // Asegura que los elementos se actualicen correctamente
                let anchoInput = document.getElementById("campo").offsetWidth;
                lista.style.width = anchoInput + 'px';
            })
            .catch(err => console.log(err));
    } else {
        lista.style.display = 'none';
    }
}

// Evento para obtener códigos al escribir en el campo de texto
document.getElementById("campo").addEventListener("input", getCodigos);

// Evento para seleccionar el texto en el campo de texto al hacer clic
document.getElementById('campo').addEventListener('click', function() {
    this.select();
});

// Evitar el reenvío de la página al presionar Enter
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
});
