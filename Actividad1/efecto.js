function alerta(){
 alert("Hola, bienvenido a mi página")
}

function cambiarParrafo(e) {
    const htmlNodes = document.getElementsByTagName("p");
    for (let i = 0; i < htmlNodes.length; i++) {
        if (htmlNodes[i].classList.contains("parrafoMarron")) {
            htmlNodes[i].classList.remove("parrafoMarron");
        } 
        else {
            htmlNodes[i].classList.add("parrafoMarron");
        }
    }
}

const imagen1 = "Selva Irati(Navarra).jpg";
const imagen2 = "Fuerteventura.jpg";

function onmouseover(e){
    e.target.src = imagen2;
}

function onmouseout(e){
    e.target.src = imagen1;
}

document.getElementById("boton").addEventListener("click", cambiarParrafo);
document.getElementById("imagen").addEventListener("mouseover", onmouseover);
document.getElementById("imagen").addEventListener("mouseout", onmouseout);

window.onload=alerta;

