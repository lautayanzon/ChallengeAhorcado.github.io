

//var canvas = crearTablero();

var canvas;
var pincel;

function setearCanvas() {
    canvas = document.querySelector(".miCanvas");
    pincel = canvas.getContext("2d");
}

function crearTablero(palabraSecreta) {

    var section = document.querySelector(".container-canvas");

    var canvas = document.createElement("canvas");
    canvas.classList.add("miCanvas");
    canvas.width = 1200;
    canvas.height = 800;

    section.appendChild(canvas);

    setearCanvas();

    dibujarTablero();
    dibujarGuiones(palabraSecreta);
}

function reiniciarTablero() {
    canvas.parentNode.removeChild(canvas);
}

function dibujarTablero() {

    dibujarRect(50, 600, 300, 100, 0, "Black");
    dibujarRect(175, 100, 50, 500, 0, "SaddleBrown");
    dibujarRect(225, 100, 230, 50, 0, "SaddleBrown");
    dibujarPoste();

    dibujarLine(425, 150, 0, 80, "Black");
}

function dibujarRect(x, y, tamX, tamY, angulo, color) {
    pincel.fillStyle = color;
    pincel.rotate(angulo * Math.PI / 180);
    pincel.fillRect(x, y, tamX, tamY);
    pincel.strokeStyle = "black";
    pincel.lineWidth = 2;
    pincel.strokeRect(x, y, tamX, tamY);
    pincel.resetTransform();
}

function dibujarPoste() {
    pincel.fillStyle = "SaddleBrown";
    pincel.beginPath();
    pincel.moveTo(175, 250);
    pincel.lineTo(320, 100);
    pincel.lineTo(380, 100);
    pincel.lineTo(175, 315);
    pincel.lineTo(175, 250);
    pincel.fill();
    pincel.strokeStyle = "Black";
    pincel.stroke();
    pincel.closePath();

    pincel.fillStyle = "LightGrey";
    pincel.beginPath();
    pincel.arc(325, 125, 10, 0, 2 * 3.14);
    pincel.fill();
    pincel.strokeStyle = "Black";
    pincel.stroke();

    pincel.fillStyle = "LightGrey";
    pincel.beginPath()
    pincel.arc(200, 255, 10, 0, 2 * 3.14);
    pincel.fill();
    pincel.strokeStyle = "Black";
    pincel.stroke();

}

function dibujarCabeza(x, y, radio, color) {

    pincel.fillStyle = color;
    pincel.transform(1, -.1, -.1, 1, 0, 0);
    pincel.beginPath();
    pincel.arc(x, y, radio, 0, 2 * 3.14);
    pincel.lineWidth = 5;
    pincel.stroke();
    pincel.closePath();
    pincel.resetTransform();
}

function dibujarLine(x, y, aumX, aumY, color) {
    pincel.beginPath();
    pincel.moveTo(x, y);
    pincel.lineTo((x + aumX), (y + aumY));
    pincel.strokeStyle = color;
    pincel.lineWidth = 2;
    pincel.stroke();
    pincel.closePath();
}

function dibujarGuiones(palabraSecreta) {

    var x = 400;
    var y = 700;
    var espacio = 0;

    for (i = 0; i < palabraSecreta.length; i++) {

        dibujarLine(x + espacio, y, 50, 0, "black");
        x += 50;
        espacio += 20;
    }
}

function dibujarLetraCorrecta(letra, x) {

    pincel.font = "50px Helvética";
    pincel.fillStyle = "black";
    pincel.fillText(letra, x, 680);

}

function dibujarLetraIncorrecta(letra, x) {

    pincel.font = "50px Helvética";
    pincel.fillStyle = "black";
    pincel.fillText(letra, x, 500);

}

function dibujarAhorcado(equivocaciones) {
    switch (equivocaciones) {
        case 1:
            dibujarCabeza(465, 305, 30, "black");
            break;
        case 2:
            dibujarCabeza(465, 305, 30, "black");
            dibujarRectRedondeado(400, 290, 15, 50, 100);
            break;
        case 3:
            dibujarCabeza(465, 305, 30, "black");
            dibujarRectRedondeado(400, 290, 15, 50, 100);
            dibujarRectRedondeado(400, 390, 15, 25, 80);
            break;
        case 4:
            dibujarCabeza(465, 305, 30, "black");
            dibujarRectRedondeado(400, 290, 15, 50, 100);
            dibujarRectRedondeado(400, 390, 15, 25, 80);
            dibujarRectRedondeado(425, 390, 15, 25, 80);
            break;
        case 5:
            dibujarCabeza(465, 305, 30, "black");
            dibujarRectRedondeado(400, 290, 15, 50, 100);
            dibujarRectRedondeado(400, 390, 15, 25, 80);
            dibujarRectRedondeado(425, 390, 15, 25, 80);
            dibujarRectRedondeado(375, 295, 15, 25, 75);
            break;
        case 6:
            dibujarCabeza(465, 305, 30, "black");
            dibujarRectRedondeado(400, 290, 15, 50, 100);
            dibujarRectRedondeado(400, 390, 15, 25, 80);
            dibujarRectRedondeado(425, 390, 15, 25, 80);
            dibujarRectRedondeado(375, 295, 15, 25, 75);
            dibujarRectRedondeado(450, 295, 15, 25, 75);
            break;
        default:
            break;
    }
}

function dibujarRectRedondeado(x, y, radius, width, height) {

    pincel.resetTransform();
    pincel.beginPath();
    pincel.moveTo(x + radius, y);
    pincel.lineTo(x + width - radius, y);
    pincel.quadraticCurveTo(x + width, y, x + width, y + radius);
    pincel.lineTo(x + width, y + height - radius);
    pincel.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    pincel.lineTo(x + radius, y + height);
    pincel.quadraticCurveTo(x, y + height, x, y + height - radius);
    pincel.lineTo(x, y + radius);
    pincel.quadraticCurveTo(x, y, x + radius, y);
    pincel.closePath();
    pincel.stroke();

}

function dibujarMensaje(mensaje, color) {

    pincel.font = "50px Helvética";
    pincel.fillStyle = color;
    pincel.fillText(mensaje, 650, 300);

}
