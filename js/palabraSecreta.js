
var palabras = ["Horca", "Challenge", "Alura", "Oracle"];

var letrasIngresadas = [];

var contadorIncorrectas = 0;
var contadorCorrectas = 0;

var isFinDelJuego = false;

const xCorrectas = 410;
const aumentoCorrectas = 70;

const xIncorrectas = 600;
const aumentoIncorrectas = 50;


function elegirPalabra() {
    return palabras[Math.floor(Math.random() * palabras.length)]
}


function agregarPalabra(palabra) {
    palabras.push(palabra);
}

function verificarLetra(palabraSecreta, letra) {

    var indiceLetra = [];
    var isLetraCorrecta = false;

    for (i = 0; i < palabraSecreta.length; i++) {
        if (palabraSecreta.toLowerCase().substring(i, i + 1) == letra.toLowerCase() && !letrasIngresadas.includes(letra.toLowerCase())) {
            indiceLetra.push(i);
            isLetraCorrecta = true;
            contadorCorrectas++;
        }
    }

    letrasIngresadas.push(letra.toLowerCase());

    // let result = letrasIngresadas.filter((item, index) => {
    //     return letrasIngresadas.indexOf(item) === index;
    // })

    indiceLetra.forEach(function (indice) {
        dibujarLetraCorrecta(letra.toUpperCase(), (xCorrectas + (aumentoCorrectas * indice)));
    })

    if (!isLetraCorrecta) {
        dibujarLetraIncorrecta(letra.toUpperCase(), (xIncorrectas + (aumentoIncorrectas * contadorIncorrectas)));
        contadorIncorrectas++;
        dibujarAhorcado(contadorIncorrectas);
    }

    verificarGanador(palabraSecreta, contadorCorrectas, contadorIncorrectas);
}

function verificarGanador(palabraSecreta, contadorCorrectas, contadorIncorrectas) {

    if (contadorCorrectas == palabraSecreta.length) {
        dibujarMensaje("Felicidades, ganaste!", "green");
        isFinDelJuego = true;
    } else if (contadorIncorrectas == 6) {
        dibujarMensaje("Fin del juego.", "red");
        isFinDelJuego = true;
    }
}

function reiniciarContador() {
    contadorCorrectas = 0;
    contadorIncorrectas = 0;
    isFinDelJuego = false;
    letrasIngresadas = [];
}
