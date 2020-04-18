class Pipes {

  constructor() {
    this.x = windowWidth + 100;
    this.y = windowHeight + 100;
    this.speed = 10;
  }

  drop() {
    this.x -= this.speed; //falling
  }

  display() { //draw the catcher
    stroke(0);
    fill(0, 255, 0);
    rect(this.x, 500, 55, 250);
    rect(this.x, 0, 55, 250);

  }
}
