

class Levels {

  constructor(){
      this.x = 2;
      this.levelSide = 300;
  }


  display() {
    stroke(0);
    fill(255, 255, 0);
    textSize(100);
    rect(screen.width/4 - this.levelSide/2, 300, this.levelSide, this.levelSide); //top pipe
    rect(screen.width/2 - this.levelSide/2, 300, this.levelSide, this.levelSide);
    rect(screen.width/4 * 3 - this.levelSide/2, 300, this.levelSide, this.levelSide); //top pipe

    fill(0, 0, 0);

    text("Click the level you want to play", 30, 150);

    text("1", screen.width/4 - 30, this.levelSide + 180);
    text("2", screen.width/2 - 30, this.levelSide + 180);
    text("3", screen.width/4*3 - 30, this.levelSide + 180);
  }
}
