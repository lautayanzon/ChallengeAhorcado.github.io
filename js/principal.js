
var botonIniciarJuego = document.querySelector(".iniciar-juego");

var botonAgregarPalabra = document.querySelector(".agregar-palabra");

var palabraSecreta = "";

var isJugando = false;

var valoresAceptados = /^[A-Za-z]+$/;


botonIniciarJuego.addEventListener("click", function (evento) {

    if (isJugando) {
        reiniciarTablero();
        reiniciarContador();
        palabraSecreta = elegirPalabra();
        console.log(palabraSecreta);
        crearTablero(palabraSecreta);
    }

    if (!isJugando) {
        botonIniciarJuego.textContent = "Reiniciar juego";
        palabraSecreta = elegirPalabra();
        console.log(palabraSecreta);
        crearTablero(palabraSecreta);
        isJugando = true;
    }



});

botonAgregarPalabra.addEventListener("click", (evento) => {

    evento.preventDefault();

    var formPalabraNueva = document.querySelector(".form-agregar-palabra");

    var palabraNueva = formPalabraNueva.addPalabra.value;

    agregarPalabra(palabraNueva);

    formPalabraNueva.reset();
    formPalabraNueva.addPalabra.focus();

});

document.addEventListener("keydown", function (evento) {

    if (evento.key.match(valoresAceptados) && isJugando && !isFinDelJuego) {
        verificarLetra(palabraSecreta, evento.key);
    }

})


