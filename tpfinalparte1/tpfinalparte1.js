//variables
let pantallas = [];
let pantallaActual = 0;
let mySound;
let textos = [];

//pantallas, imagenes, archivo de textos, musica
function preload() {
  for (let i = 0; i < 16; i++) {
    pantallas[i] = loadImage("data/pantalla" + i + ".jpg");
  }
  mySound = loadSound('data/cancion.mp3');
  textos = loadStrings('data/textos.txt');
}

//lienzo
function setup() {
  createCanvas(640, 480);
}
function draw() {
  background(200);
  dibujarPantalla();
}
//Pantallas
function dibujarPantalla() {
  image(pantallas[pantallaActual], 0, 0, 640, 480);
  let textoActual = textos[pantallaActual]; //textos segun la pantalla
  fill(0);
  rect(20, 45, 610, 61);
  fill(255);
  textSize(16);
  textAlign(CENTER);
  text(textoActual, 25, 50, 600, 60);

  if (pantallaActual === 0) {
    mostrarBotonesInicio();
  } else if (pantallaActual === 2) {
    mostrarBotonesSiNo();
  } else if (pantallaActual === 3 || pantallaActual === 12 || pantallaActual === 14 || pantallaActual === 15) {
    mostrarBotonReiniciar();
  } else if (pantallaActual === 4) {
    mostrarBotonesRojoBlanco();
  } else if (pantallaActual === 5) {
    mostrarBotonesSiNo();
  } else if (pantallaActual === 8) {
    mostrarBotonesCamino();
  } else if (pantallaActual === 10) {
    mostrarBotonesEnfrentarteYEntregarte();
  } else if (pantallaActual === 1 || pantallaActual === 6 || pantallaActual === 7 || pantallaActual === 9 || pantallaActual === 11 || pantallaActual === 13) {
    mostrarBotonAvanzar();
  }
}

//Botones
function dibujarBoton(x, y, ancho, alto, colorRelleno, colorTexto, texto) {
  fill(colorRelleno);
  rect(x, y, ancho, alto);
  fill(colorTexto);
  textSize(20);
  textAlign(CENTER, CENTER);
  text(texto, x + ancho / 2, y + alto / 2);
}
function mostrarBotonesInicio() {
  dibujarBoton(150, 400, 150, 50, color(0, 255, 0), color(255), "Iniciar aventura");
  dibujarBoton(400, 400, 150, 50, color(0, 0, 255), color(255), "Creditos");
}

function mostrarBotonReiniciar() {
  dibujarBoton(250, 400, 140, 50, color(0, 0, 255), color(255), "Reiniciar");
}

function mostrarBotonesSiNo() {
  dibujarBoton(150, 400, 100, 50, color(0, 255, 0), color(255), "Sí");
  dibujarBoton(400, 400, 100, 50, color(255, 0, 0), color(255), "No");
}

function mostrarBotonesRojoBlanco() {
  dibujarBoton(150, 400, 100, 50, color(255, 0, 0), color(255), "Rojo");
  dibujarBoton(400, 400, 100, 50, color(255), color(0), "Blanco");
}

function mostrarBotonesCamino() {
  dibujarBoton(150, 400, 150, 50, color(0, 255, 0), color(255), "Camino corto");
  dibujarBoton(400, 400, 150, 50, color(255, 0, 0), color(255), "Camino largo");
}

function mostrarBotonesEnfrentarteYEntregarte() {
  dibujarBoton(150, 400, 150, 50, color(0, 255, 0), color(255), "Enfrentarte");
  dibujarBoton(400, 400, 150, 50, color(255, 0, 0), color(255), "Entregarte");
}

function mostrarBotonAvanzar() {
  dibujarBoton(500, 400, 100, 50, color(0, 0, 255), color(255), "Avanzar");
}

//Interaccion
function clicEnBoton(x, y, ancho, alto) {
  return mouseX > x && mouseX < x + ancho && mouseY > y && mouseY < y + alto;
}

function mousePressed() {
  controlDeFlujoDeAccionesDePantallas();
}

function controlDeFlujoDeAccionesDePantallas() {
  if (pantallaActual === 0) {
    if (clicEnBoton(150, 400, 150, 50)) {
      pantallaActual = 1;
    } else if (clicEnBoton(400, 400, 150, 50)) {
      pantallaActual = 15;
      if (!mySound.isPlaying()) {
        mySound.loop();
      }
    }
  } else if (pantallaActual === 1 || pantallaActual === 6 || pantallaActual === 7 || pantallaActual === 11 || pantallaActual === 13) {
    if (clicEnBoton(500, 400, 100, 50)) {
      pantallaActual++;
    }
  } else if (pantallaActual === 9) {
    if (clicEnBoton(500, 400, 100, 50)) {
      pantallaActual = 13;
    }
  } else if (pantallaActual === 2) {
    if (clicEnBoton(150, 400, 100, 50)) {
      pantallaActual = 4;
    } else if (clicEnBoton(400, 400, 100, 50)) {
      pantallaActual = 3;
    }
  } else if (pantallaActual === 4) {
    if (clicEnBoton(150, 400, 100, 50) || clicEnBoton(400, 400, 100, 50)) {
      pantallaActual = 5;
    }
  } else if (pantallaActual === 5 || pantallaActual === 8) {
    if (clicEnBoton(150, 400, 100, 50) || clicEnBoton(150, 400, 150, 50)) {
      pantallaActual++;
    } else if (clicEnBoton(400, 400, 100, 50) || clicEnBoton(400, 400, 150, 50)) {
      pantallaActual += 2;
    }
  } else if (pantallaActual === 3 || pantallaActual === 12 || pantallaActual === 14 || pantallaActual === 15) {
    if (clicEnBoton(250, 400, 140, 50)) {
      pantallaActual = 0;
      if (pantallaActual === 0 && mySound.isPlaying()) {
        mySound.stop();
      }
    }
  } else if (pantallaActual === 10) {
    if (clicEnBoton(150, 400, 150, 50)) {
      pantallaActual = 13;
    } else if (clicEnBoton(400, 400, 150, 50)) {
      pantallaActual = 11;
    }
  }
}
