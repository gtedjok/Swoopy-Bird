//Project Name: Flappy Swoop
/*If your IDE supports linting see the .jshintrc document
in the project root folder for linting options*/

var bird;
var pipe;
var timer;
var isDead = false;
var pipeList = [];
var score = 0;
var speed = 1000;

function setup() {
  createCanvas(windowWidth, windowHeight);

  bird = new Bird();
  pipe = new Pipes();
  timer = new Timer(speed); //Time between drop 300ms
  timer.start(); // Start the timer
}

function draw() {
  background(255);

  if (bird.y + bird.r > windowHeight){
    isDead = true;
  }

  if (timer.isFinished()) { // time for new pipe
     if (!isDead) score += 1;
    pipeList.push(new Pipes());
    timer.start(); //restart timer for next drop
  }

  bird.display();

  for (let i = pipeList.length - 1; i >= 0; i--) {
    let pipe = pipeList[i];

    if (pipe.remove()) { //Removes pipe if out of screen
      pipeList.splice(i, 1);
    } else {
      pipe.display(); //draw the frop
    }

    if (!isDead) { //Stops pipe if dead
      pipe.moveBack();
    }

    if (bird.intersect(pipe)) {
      isDead = true;
    }
  }
  textSize(50);
  fill(0, 0, 0);
if (!isDead){
  bird.drop(); //bird falling
  text("Score: " + int(score), windowHeight/2, 100); //add score onscreen
}
else {

  text("Score: " + int(score), windowHeight/2, 100); //add score onscreen
  text("Click 'R' to restart", windowHeight/2, 150); //add score onscreen

}

}

function restart() {
  score = 0;
  pipeList = [];
  bird.accelerate = 0;
  bird.x = windowWidth/2;  //so bird is in the middle
  bird.y = windowHeight/2; // start above the window
  isDead = false;

}

function keyPressed() {
  if (keyCode == UP_ARROW && !isDead) {
    bird.up();
  }
  if (key == 'r' && isDead){
    restart();
  }
}
