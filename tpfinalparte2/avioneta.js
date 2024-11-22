class Avioneta {
  constructor(posX, posY, color) {
    this.posX = posX;
    this.posY = posY;
    this.color = color;
    this.ancho = 70;
    this.alto = 40;
    this.velocidad = 2;
    this.vida = new Vida(3, color); // el numero inicial de vidas son 3
  }

  // cuando una avioneta reciba un disparo
  recibirDisparo() {
    this.vida.perderVida();  // cada disparo disminuye la vida
    if (this.vida.estaVivo()) {
    }
  }

  dibujar() {
    if (this.color === 'azul') {
      // Dibujar la imagen de la avioneta azul
      image(avionetaazul, this.posX, this.posY, this.ancho, this.alto);
    } else {
      // Dibujar la imagen de la avioneta roja
      image(avionetaroja, this.posX, this.posY, this.ancho, this.alto);
    }
    this.vida.mostrar(); // mostrar las vidas de la avioneta
  }


  teclaPresionada() {
    if (this.color === 'azul') {
      this.mover(); // la avioneta azul se mueve con las flechas
    } else if (this.color === 'rojo') {
      this.mover(); // la avioneta roja se mueve con las teclas a,d,w,s
    }
  }

  mover() {
    // movimiento libre con las teclas
    if (this.color === 'azul') {
      if (keyIsDown(LEFT_ARROW)) {
        this.posX -= this.velocidad;
      }
      if (keyIsDown(RIGHT_ARROW)) {
        this.posX += this.velocidad;
      }
      if (keyIsDown(UP_ARROW)) {
        this.posY -= this.velocidad;
      }
      if (keyIsDown(DOWN_ARROW)) {
        this.posY += this.velocidad;
      }
    } else if (this.color === 'rojo') {
      if (keyIsDown(65)) { // 'A' para mover a la izquierda
        this.posX -= this.velocidad;
      }
      if (keyIsDown(68)) { // 'D' para mover a la derecha
        this.posX += this.velocidad;
      }
      if (keyIsDown(87)) { // 'W' para mover arriba
        this.posY -= this.velocidad;
      }
      if (keyIsDown(83)) { // 'S' para mover abajo
        this.posY += this.velocidad;
      }
    }

    // limitar a la avioneta para que no salga del lienzo
    this.posX = constrain(this.posX, 0, width - this.ancho);
    this.posY = constrain(this.posY, 0, height - this.alto);
  }
}
