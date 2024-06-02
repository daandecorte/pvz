const canvas = document.querySelector("canvas");
const ctx = canvas.getContext('2d');

let sunflowers = [];
let peashooters = [];
let zombies = [];

function random(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

canvas.addEventListener('click', placePeashooter, true);
canvas.addEventListener('contextmenu', placeSunflower, true);
function placePeashooter(e) {
  let x = e.pageX-50;
  let y = e.pageY-50;
  console.log(`${x}, ${y}`)
  peashooters.push(new peashooter(x, y));
}
function placeSunflower(e) {
  let x = e.pageX-50;
  let y = e.pageY-50;
  e.preventDefault();
  sunflowers.push(new sunflower(x, y));
}

function drawPlants() {
  for (let i = 0; i < peashooters.length; i++) {
    peashooters[i].draw(ctx)
  }
  for (let i = 0; i < sunflowers.length; i++) {
    sunflowers[i].draw(ctx)
  }
}
let teller = 0;
function loop() {
  ctx.clearRect(0,0,1500, 700);
  drawPlants();
  peashooters.forEach((e) => {
    //if (Object.is(e, peashooter))
      e.shoot(canvas, ctx);
  })
  if (teller % 1000 == 0) {
    zombies.push(new zombie(canvas.clientWidth, random(50, canvas.clientHeight-200)));
    teller = 0;
  }
  zombies.forEach(element => {
    element.draw(ctx);
    element.move(canvas);
    peashooters.forEach(e => {
      e.pea.collide(element);
    });
  });
  for (let i = 0; i < zombies.length; i++) {
    if (zombies[i].hp <= 0) {
      zombies.splice(i, 1);
    }
  }
  console.log(zombies.length)
  teller++;
  setTimeout(loop, 1)
}
loop();