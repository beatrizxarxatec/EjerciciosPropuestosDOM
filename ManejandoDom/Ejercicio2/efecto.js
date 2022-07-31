const cantidadCols = 4;
function agregarFila() {
    const tabla = document.getElementById("tabla");
    const fila = tabla.insertRow(-1); // Ultima fila
    for (let i = 0; i < cantidadCols; i++) {
        const celda = fila.insertCell(i);
        celda.innerHTML = "Contenido " + i;
    }
}
document.getElementById("boton").addEventListener("click", agregarFila);