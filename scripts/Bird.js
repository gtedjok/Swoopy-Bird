class Bird {

  constructor() {
    this.r = 20; //radius
    this.x = windowWidth/2;  //so bird is in the middle
    this.y = windowHeight/2; // start above the window
    this.accelerate = 0;
    this.speed = 1;
    this.jump = 100; //how high the bird jumps
    this.birdColor = color(50, 100, 150); //blue-ish
  }

  drop() {
    this.y += this.speed + this.accelerate; //falling
    this.accelerate += 0.06;
  }

  up() {
    this.accelerate = 0;
    this.y -= this.jump;
  }

  intersect(pipe) {
    // let distance = dist(this.x, this.y, pipe.x, pipe.y);
    // if (distance < this.r)
    //   return true; // touching!

    if (this.x < pipe.x + 55 && this.x > pipe.x && (this.y > 0 && this.y < 300 + pipe.rand || this.y < windowHeight && this.y > 550 + pipe.rand))
    {
      console.log ('hit');
      return true;
    }
  }
  display() { //draw the catcher
    stroke(0);
    fill(0, 125, 255);
    circle(this.x, this.y, this.r*2);
  }
}
