class Pipes {

  constructor(speed) {
    this.x = windowWidth + 100;
    this.y = windowHeight + 100;
    this.randNum = Math.floor(Math.random() * 100); //random will return a double between 0 - 1
    this.rand = Math.random() < 0.5 ? this.randNum : -this.randNum; //50% of rand number ot be pos or neg
    this.speed = speed;
    this.pipe_width = 100;
  }

  moveBack() {
    this.x -= this.speed; //travels backwards
  }

  remove() {
    if (this.x < 0){
      return true;
    }
    else {
        return false;
    }
  }

  display() { //draw the catcher
    stroke(0);
    fill(0, 255, 0);
    rect(this.x, 0, this.pipe_width, 300 + this.rand); //top pipe
    rect(this.x, 550 + this.rand, this.pipe_width, windowHeight);

  }
}
