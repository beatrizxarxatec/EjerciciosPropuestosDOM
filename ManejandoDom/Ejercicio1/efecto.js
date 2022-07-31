const min = 1;
const max = 4;

function cambiarImagen(e) {
    const num = Math.floor(Math.random() * max + min);
    const nombre = "Imagen" + num + ".jpg";
    e.target.src = nombre;
    console.log(nombre);
}

document.getElementById("imagen").addEventListener("click", cambiarImagen);
