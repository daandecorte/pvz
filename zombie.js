class zombie {
  constructor(x, y) {
    this.img = new Image();
    this.img.src = 'zombie.webp';
    this.x = x;
    this.y = y;
    this.hp = 5;
  }
  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, 100, 150);
  }
  move(canvas) {
    this.x-=0.2;
  }
}