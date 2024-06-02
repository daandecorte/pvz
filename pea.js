class pea{
  constructor(x, y) {
    this.xtemp = x;
    this.x = x;
    this.y = y;
    this.img = new Image();
    this.img.src = 'pea.png';
  }
  draw(ctx) {
    ctx.drawImage(this.img, this.xtemp, this.y, 50, 50);
  }
  move(canvas) {
    this.xtemp+=2;
    if (this.xtemp > canvas.clientWidth) {
      this.xtemp = this.x
    }
  }
  collide(zombie) {
    if (this.xtemp > zombie.x && this.y > zombie.y && this.y < zombie.y + 150)
    {
      zombie.hp--;
      this.xtemp = this.x;
      console.log(`${this.x} ${zombie.hp}`);
    }
  }
}