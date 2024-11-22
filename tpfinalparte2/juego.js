class Juego {
  constructor() {
    this.avionetaAzul = new Avioneta(10, height / 2, 'azul');
    this.avionetaRojo = new Avioneta(560, height / 2, 'rojo');
    this.balas = [];
    this.obstaculos = [];
    this.crearObstaculos();
    this.boton = new Boton(320, 500, 150, 50, color(0, 255, 0), color(255), "Volver");
    this.juegoTerminado = false;
    this.teclasPresionadas = [false, false];
    this.ganador = new Ganador(); // mostramos la pantalla de ganador
    this.fondo = loadImage('data/fondo.jpg');
  }

  crearObstaculos() {
    for (let i = 0; i < 4; i++) {
      this.obstaculos[i] = new Obstaculo(120 * (i + 1), (i  * 150), 2);
    }
  }



  dibujar() {
    image(this.fondo, 0, 0, width, height);
    if (this.juegoTerminado) {
      let mensaje = "";
      if (!this.avionetaAzul.vida.estaVivo()) {
        mensaje = "¡Auto Rojo Gana!";
      } else if (!this.avionetaRojo.vida.estaVivo()) {
        mensaje = "¡Auto Azul Gana!";
      }
      this.ganador.mostrar(mensaje); // mostrar la pantalla de ganador
      return;
    }

    this.avionetaAzul.dibujar();
    this.avionetaRojo.dibujar();

    for (let i = 0; i < this.balas.length; i++) {
      this.balas[i].dibujar();
      this.balas[i].mover();
      if (this.balas[i].colisionConAvioneta(this.avionetaAzul) || this.balas[i].colisionConAvioneta(this.avionetaRojo)) {
        this.balas[i] = null;
      }
    }
    this.balas = this.balas.filter(bala => bala !== null);

    for (let i = 0; i < this.obstaculos.length; i++) {
      this.obstaculos[i].dibujar();
      this.obstaculos[i].mover();

      // Comprobar colisiones con balas
      for (let j = 0; j < this.balas.length; j++) {
        if (this.balas[j].colisionConObstaculo(this.obstaculos[i])) {
        }
      }
    }
    if (!this.avionetaAzul.vida.estaVivo() || !this.avionetaRojo.vida.estaVivo()) {
      this.juegoTerminado = true; // El juego ha terminado
    }
  }

  teclaPresionada() {
    if (this.juegoTerminado) {
      this.ganador.teclaPresionada(); // click para volver
    } else {
      this.avionetaAzul.teclaPresionada(); // click para moverse
      this.avionetaRojo.teclaPresionada();

      if (keyIsPressed) { // click para disparar
        if (key === ' ' && !this.teclasPresionadas[' ']) {
          this.teclasPresionadas[' '] = true;
          this.dispararBala(this.avionetaAzul);
        } else if (key === 'Enter' && !this.teclasPresionadas['Enter']) {
          this.teclasPresionadas['Enter'] = true;
          this.dispararBala(this.avionetaRojo);
        }
      } else {
        if (key === ' ') {
          this.teclasPresionadas[' '] = false;
        } else if (key === 'Enter') {
          this.teclasPresionadas['Enter'] = false;
        }
      }
    }
  }

  dispararBala(avioneta) {
    let nuevaBala;
    if (avioneta.color === 'azul') {
      nuevaBala = new Bala(avioneta.posX + avioneta.ancho, avioneta.posY + avioneta.alto / 2, 5, color(0, 0, 255));
    } else {
      nuevaBala = new Bala(avioneta.posX, avioneta.posY + avioneta.alto / 2, -5, color(255, 0, 0));
    }
    this.balas[this.balas.length] = nuevaBala;
  }

  reiniciarJuego() {
    this.avionetaAzul = new Avioneta(10, height / 2, 'azul');
    this.avionetaRojo = new Avioneta(560, height / 2, 'rojo');
    this.balas = [];
    this.obstaculos = [];
    this.crearObstaculos();
    this.juegoTerminado = false;
  }
}
