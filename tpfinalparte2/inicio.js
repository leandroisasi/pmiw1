class Inicio {
  constructor() {
    this.botonJugar = new Boton (50, 100, 150, 50, color(0, 255, 0), color(255), "Jugar");
    this.botonCreditos = new Boton (250, 100, 150, 50, color(0, 0, 255), color(255), "Creditos");
    this.botonInstrucciones = new Boton (450, 100, 150, 50, color(255, 0, 0), color(255), "Instrucciones");
    this.portada = loadImage('data/portada.jpg');
  }

  mostrar() {
    image(this.portada, 0, 0, width, height);
    this.botonJugar.dibujar();
    this.botonCreditos.dibujar();
    this.botonInstrucciones.dibujar();
  }
}
