"use strict";


var tamanio = 10;
var posx = 100,
    posy = 100;
var velocidad = 10;
var xxx;

var canvas = document.getElementById("areaDibujo");
var ctx = canvas.getContext("2d");
var body;


window.onload = function() {
    dibujarCuadro(posx, posy);

    body = document.getElementById("body");

    body.onkeydown = function(evento) {
        procesar(evento);
    }

}



function dibujarCuadro(px, py) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(px, py, tamanio, tamanio);
}

function procesar(evento) {

    let tecla = evento.keyCode;

    console.log("la tecla es:" + tecla);

    switch (tecla) {

        case 38: //sube 
            if (posy > 0) {
                posy -= tamanio;
            }
            break;
        case 40: //baja
            if (posy < canvas.height - tamanio) {
                posy += tamanio;
            }
            break;
        case 39: //derecha
            if (posx < canvas.width - tamanio) {
                posx += tamanio;
            }
            break;
        case 37: //izquierda
            if (posx > 0) {
                posx -= tamanio;
            }
            break;
    }

}


function principal() {

    dibujarCuadro(posx, posy);


}


setInterval("principal()", velocidad);