class Pipes {

  constructor() {
    this.x = windowWidth + 100;
    this.y = windowHeight + 100;
    this.randNum = Math.floor(Math.random() * 100); //random will return a double between 0 - 1
    this.rand = Math.random() < 0.5 ? this.randNum : -this.randNum; //50% of rand number ot be pos or neg
    this.speed = 8;
  }

  moveBack() {
    this.x -= this.speed; //falling
  }

  remove() {
    if (this.x < 0){
      return true;
    }
    else {
      {
        return false;
      }
    }
  }

  display() { //draw the catcher
    stroke(0);
    fill(0, 255, 0);
    rect(this.x, 0, 55, 300 + this.rand); //top pipe
    rect(this.x, 550 + this.rand, 55, windowHeight);


  }
}

