//Alumnos: Leandro Isasi 93081/8 - Facundo Cristobal 119003/5
//Comisión: 5
//Profesor: Leonardo Garay
//https://www.youtube.com/watch?v=ktskIDASOTY

  let pantallaActiva = 1;
  let pantallaInicio, pantallaCreditos, pantallaInstrucciones, juego;
  let creditosTextos, instruccionesTextos;
  let sonido;
  let avionetaazul, avionetaroja;
  let obstaculosestrellas;
  let control;

  function preload() {
    sonido = loadSound('data/musica.mp3');
    creditosTextos = loadStrings('data/creditos.txt');
    instruccionesTextos = loadStrings('data/instrucciones.txt');
    avionetaazul = loadImage('data/avionetaazul.png');
    avionetaroja = loadImage('data/avionetaroja.png');
    obstaculosestrellas = loadImage('data/obstaculosestrellas.png');
  }

  function setup() {
    createCanvas(640, 480);
    control = new Control();
  }

  function draw() {
    control.mostrarPantalla();
    control.detectarBotones();
}
