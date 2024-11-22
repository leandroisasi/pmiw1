class Bala {
  constructor(posX, posY, velocidad, color) {
    this.posX = posX;
    this.posY = posY;
    this.velocidad = velocidad;
    this.color = color;
    this.diametro = 10;
  }

  mover() {
    this.posX += this.velocidad;
  }

  dibujar() {
    fill(this.color);
    ellipse(this.posX, this.posY, this.diametro);
  }

  colisionConAvioneta(avioneta) {
    if (this.posX + this.diametro / 2 > avioneta.posX &&
      this.posX - this.diametro / 2 < avioneta.posX + avioneta.ancho &&
      this.posY + this.diametro / 2 > avioneta.posY &&
      this.posY - this.diametro / 2 < avioneta.posY + avioneta.alto) {
      avioneta.recibirDisparo();
      this.posX = -1000; // Destruir la bala
      return true; // sino pongo esto la bala vuelve
    }
  }

  colisionConObstaculo(obstaculo) {
    if (this.posX + this.diametro / 2 > obstaculo.posX &&
      this.posX - this.diametro / 2 < obstaculo.posX + obstaculo.tamaño &&
      this.posY + this.diametro / 2 > obstaculo.posY &&
      this.posY - this.diametro / 2 < obstaculo.posY + obstaculo.tamaño) {

      // rebota con la velocidad que va la bala
      this.velocidad = -this.velocidad ;
    }
  }
}
