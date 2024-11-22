class Ganador {
  constructor() {
    this.boton = new Boton(250, 400, 150, 50, color(0, 255, 0), color(255), "Volver");
  }

  mostrar(mensaje) {
    background(0);
    textSize(32);
    fill(255);
    textAlign(CENTER, CENTER);
    text(mensaje, width / 2, height / 2 - 50); // mostrar el mensaje de ganador dependiendo quien gane, el msj esta en la pestaña de juego

    this.boton.dibujar();
  }

  teclaPresionada() {
    if (this.boton.clicEnBoton()) {
      control.pantallaActiva = 1;
      control.juego.reiniciarJuego();
    }
  }
}
