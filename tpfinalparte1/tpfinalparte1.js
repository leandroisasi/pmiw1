let pantallas = [];
let sonido;
let archivoTexto;
let pantallaActual = 0; // Asegúrate de inicializar esta variable
let transiciones = {
  0: [1], // Pantalla 0 tiene un botón que lleva a la pantalla 1
  1: [2], // Pantalla 1 lleva a la pantalla 2
  2: [3, 4], // Pantalla 2 lleva a pantalla 4 si eliges "Sí", y a pantalla 3 si eliges "No"
  3: [0], // Pantalla 3 tiene un botón de reinicio que lleva a la pantalla 0
  4: [5], // Pantalla 4 lleva a la pantalla 5 sin importar la opción
  5: [6, 7], // Pantalla 5 lleva a pantalla 6 si eliges "Sí", y a pantalla 7 si eliges "No"
  6: [7], // Pantalla 6 lleva a pantalla 8
  7: [8], // Pantalla 7 lleva a pantalla 8
  8: [9, 10], // Pantalla 8 lleva a pantalla 10 si eliges "Corto", y a pantalla 9 si eliges "Largo"
  9: [13], // Pantalla 9 lleva a pantalla 11
  10: [11, 13], // Pantalla 10 lleva a pantalla 11 si eliges "Frenar", y a pantalla 13 si eliges "Enfrentar"
  11: [12], // Pantalla 11 lleva a pantalla 12
  12: [0], // Pantalla 12 tiene un botón de reinicio que lleva a la pantalla 0
  13: [14], // Pantalla 13 lleva a pantalla 14
  14: [0], // Pantalla 14 tiene un botón de reinicio que lleva a la pantalla 0
  15: [0]  // Pantalla 15 (créditos) lleva a la pantalla 0
};


function preload() {
  for (let i = 0; i < 16; i++) {
    if (i < 16) { // Desde 0 hasta 14, que son 15 imágenes
      pantallas[i] = loadImage("data/pantalla" + i + ".jpg");
  }
  
}
  // Cargar el archivo de texto
  archivoTexto = loadStrings("data/textos.txt"); // Cargar el archivo de texto
  soundFormats("mp3");
  sonido = loadSound("data/cancion.mp3"); // Cargar el sonido
}

function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(220);
  image(pantallas[pantallaActual], 0, 0, width, height);
 
  textSize(24);
  fill(255);
  text("Pantalla Actual: " + pantallaActual, 20, 30);

  if (pantallaActual < archivoTexto.length) {
    text(archivoTexto[pantallaActual], 50, 50); // Muestra la línea correspondiente
  }
}

function mousePressed() {
  pantallaActual++;
  if (pantallaActual >= pantallas.length) {
    pantallaActual = 0; // Reinicia a la primera pantalla si se supera la última
  }

  if (pantallaActual === 15) { // Si estamos en la pantalla de créditos
    if (!sonido.isPlaying()) { // Reproduce el sonido solo si no está sonando
      sonido.play(); // Reproduce el sonido
      sonido.loop();
    }
  } else { // Si no estamos en la pantalla 15
    sonido.stop(); // Detiene el sonido
  }
}
