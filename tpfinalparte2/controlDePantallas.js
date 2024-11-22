class Control {
  constructor() {
    this.sonido = loadSound('data/musica.mp3');
    this.pantallaInicio = new Inicio();
    this.pantallaCreditos = new Creditos();
    this.pantallaInstrucciones = new Instrucciones();
    this.juego = new Juego();
    this.pantallaActiva = 1; // pantalla de inicio
  }

  mostrarPantalla() {
    // Controlar la musica de la pantalla 3
    if (this.pantallaActiva === 3) {
      this.pantallaCreditos.mostrar(this); // Pasamos la instancia de Control
      if (!this.sonido.isPlaying()) {
        this.sonido.loop();
      }
    } else {
      // frenar la musica cuando no estamos en la pantalla de creditos
      if (this.sonido.isPlaying()) {
        this.sonido.stop();
      }

      // mostrar las otras pantallas
      if (this.pantallaActiva === 4) {
        this.pantallaInstrucciones.mostrar(this); // Pasamos la instancia de Control
      } else if (this.pantallaActiva === 2) {
        this.juego.dibujar();
        this.juego.teclaPresionada();
      } else {
        this.pantallaInicio.mostrar();
      }
    }
  }

  detectarBotones() {
    if (this.pantallaActiva === 1) {
      if (this.pantallaInicio.botonJugar.clicEnBoton()) {
        this.pantallaActiva = 2; // Pantalla de juego
      } else if (this.pantallaInicio.botonCreditos.clicEnBoton()) {
        this.pantallaActiva = 3; // Pantalla de créditos
      } else if (this.pantallaInicio.botonInstrucciones.clicEnBoton()) {
        this.pantallaActiva = 4; // Pantalla de instrucciones
      }
    }
  }
}
