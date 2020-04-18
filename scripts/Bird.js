class Bird {

  constructor() {
    this.r = 15; //radius
    this.x = windowWidth/2;  //so bird is in the middle
    this.y = windowHeight/2; // start above the window
    this.speed = 2;
    this.jump = 100;
    this.birdColor = color(50, 100, 150); //blue-ish
  }

  drop() {
    this.y += this.speed; //falling
  }

  up() {
    this.y -= this.jump;
  }

  display() { //draw the catcher
    stroke(0);
    fill(0, 125, 255);
    circle(this.x, this.y, this.r*2);

  }
}
