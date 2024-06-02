class plant {
  constructor(img, x, y) {
    this.x = x;
    this.y = y;
    this.img = new Image();
    this.img.src = img;
  }
  
  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, 100, 100);
    //console.log("draw");
  }
}
class peashooter extends plant {
  constructor(x, y) {
    super('peashooter.webp', x, y);
    this.pea = new pea(x+80, y);
  }
  shoot(canvas, ctx) {
    this.pea.move(canvas);
    this.pea.draw(ctx);
  }
}
class sunflower extends plant {
  constructor(x, y) {
    super('sunflower.png', x, y);
  }
}