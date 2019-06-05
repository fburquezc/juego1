"use strict";

const SUBE = 38;
const BAJA = 40;
const IZQUIERDA = 37;
const DERECHA = 39;

var tamanio = 50;
var posx = 100,
    posy = 100;
var velocidad = 50;
var direccion = 1; //1 = derecha, 2 = baja, 3 = izquierda y 4 = sube


var canvas = document.getElementById("areaDibujo");
var ctx = canvas.getContext("2d");


var imagen = new Image();
imagen.src = "imgs/vderecha.png";

/*
    Funcion que se Carga al Iniciar el Documento
*/
window.onload = function() {
    //desplegamos el cuadro
    dibujarCuadro(posx, posy);

    //asignamos el evento al documento
    document.addEventListener("keydown", procesar, false);
}


/*
    Dibujamos el cuadro que se movera
*/
function dibujarCuadro(px, py) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //ctx.fillRect(px, py, tamanio, tamanio);
    switch (direccion) {
        case 1:
            imagen.src = "imgs/vderecha.png";
            break;
        case 2:
            imagen.src = "imgs/vbaja.png";
            break;
        case 3:
            imagen.src = "imgs/vizquierda.png";
            break;
        case 4:
            imagen.src = "imgs/vsube.png";
            break;

    }
    ctx.drawImage(imagen, px, py);
}


/*
    Función que procesa cada tecla presionada
*/

function procesar(evento) {

    let tecla = evento.keyCode;

    console.log("la tecla ex....:" + tecla);

    switch (tecla) {

        case SUBE:
            if (posy > 0) {
                posy -= tamanio;
                direccion = 4;
            }
            break;

        case BAJA:
            if (posy < canvas.height - tamanio) {
                posy += tamanio;
                direccion = 2;
            }
            break;

        case IZQUIERDA:
            if (posx > 0) {
                posx -= tamanio;
                direccion = 3;
            }
            break;

        case DERECHA:
            if (posx < canvas.width - tamanio) {
                posx += tamanio;
                direccion = 1;
            }
            break;

    }

}


/*
    Función que se llama cada cierto tiempo para redibujar el area de juego
*/
function principal() {

    dibujarCuadro(posx, posy);


}

/*
    Cada cuanto tiempo ejecutamos la funcion principal
*/
setInterval("principal()", velocidad);