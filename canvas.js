"use strict";

const SUBE = 38;
const BAJA = 40;
const IZQUIERDA = 37;
const DERECHA = 39;

var tamanio = 10;
var posx = 100,
    posy = 100;
var velocidad = 10;

var canvas = document.getElementById("areaDibujo");
var ctx = canvas.getContext("2d");

/*
    Funcion que se Carga al Iniciar el Documento
*/
window.onload = function() {
    //desplegamos el cuadro
    dibujarCuadro(posx, posy);

    //asignamos el evento al documento
    document.addEventListener("keypress", procesar);
}


/*
    Dibujamos el cuadro que se movera
*/
function dibujarCuadro(px, py) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(px, py, tamanio, tamanio);
}


/*
    Función que procesa cada tecla presionada
*/

function procesar(evento) {

    let tecla = evento.keyCode;

    console.log("la tecla es:" + tecla);

    switch (tecla) {

        case SUBE:
            if (posy > 0) {
                posy -= tamanio;
            }
            break;

        case BAJA:
            if (posy < canvas.height - tamanio) {
                posy += tamanio;
            }
            break;

        case IZQUIERDA:
            if (posx > 0) {
                posx -= tamanio;
            }
            break;

        case DERECHA:
            if (posx < canvas.width - tamanio) {
                posx += tamanio;
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


setInterval("principal()", velocidad);