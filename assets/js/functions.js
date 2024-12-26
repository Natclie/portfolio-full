const palabras = ["Programador Web","HTML - CSS - JAVASCRIPT"];
let indiceActual = 0;

function cambiarPalabra() {
    const spanDinamico = document.getElementById("dynamic-span");
    spanDinamico.style.opacity = 0;
    spanDinamico.style.transform = "translateY(5px)";

    setTimeout(() => {
        indiceActual = (indiceActual + 1) % palabras.length;
        spanDinamico.textContent = palabras[indiceActual];
        spanDinamico.style.opacity = 1;
        spanDinamico.style.transform = "translateY(-5px)";
    }, 500);
}
setInterval(cambiarPalabra, 2000);
document.getElementById("dynamic-span").textContent = palabras[indiceActual];

function abrirpop(){
    var abrirpop = document.getElementById('about');
    abrirpop.style.top = "0"
}
function cerrarpop(){
    var cerrarpop = document.getElementById('about');
    cerrarpop.style.top = "-500vh"
}