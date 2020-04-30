//Project Name: Flappy Swoop
/*If your IDE supports linting see the .jshintrc document
in the project root folder for linting options*/


var bird;
var pipe;
var level;
var timer;
var isDead = false;
var started = false;
var pipeList = [];
var score = 0;
var time = 1500;
var readyToPlay = true;
var levelSelector = false;

function setup() {
  createCanvas(windowWidth, windowHeight);

  timer = new Timer(time); //Time between drop 300ms
  timer.start(); // Start the timer

  level = new Levels();
}

function draw() {

  background(255);
  if (!levelSelector){
    level.display();
  }

  // if (level == 1){
  //
  // }else if (level == 2){
  //
  // }else if (level == 3){
  //
  // }
  if (levelSelector){
    if (bird.y + bird.r > windowHeight || bird.y + bird.r < 0){ //Bird dies if it touches the top of the window or floor
      isDead = true;
    }
    if (bird.y + bird.r > windowHeight){
      bird.y = windowHeight - bird.r;
    }
    if (timer.isFinished() && !isDead && !readyToPlay) { // time for new pipe
      score += 1; //If Bird is alive
      print("Sopawn");
      if (level == 1){
        pipeList.push(new Pipes(5));
      }
      else if (level == 2){
        pipeList.push(new Pipes(6));
      }
      else if (level == 3){
        pipeList.push(new Pipes(7));

      }
      timer.start(); //restart timer for next drop
    }

  for (let i = pipeList.length - 1; i >= 0; i--) {
    let pipeI = pipeList[i];

    if (pipeI.remove()) { //Removes pipe if out of screen
      pipeList.splice(i, 1);
    } else {
      pipeI.display(); //display the pipe
    }
    if (!isDead && !readyToPlay) pipeI.moveBack();//Keep pipe moving

    if (bird.intersect(pipeI) && !isDead) { //If bird hits pipe
      isDead = true;
    }
  }

    bird.display(); //Show bird

    textSize(50);
    fill(0, 0, 0);
    if (!readyToPlay) bird.drop(); //bird falling

    if (readyToPlay) {
      text("Score: " + int(score), windowHeight/2, 100); //add score onscreen
      text("Click Return to START", windowHeight/2, 150);
    }
    else if (isDead){
      text("Score: " + int(score), windowHeight/2, 100); //add score onscreen
      text("Click Return to RESTART", windowHeight/2, 150);
    }
    else {
      text("Score: " + int(score), windowHeight/2, 100); //add score onscreen
    }
  }

}

function restart() {
  score = 0;
  bird.accelerate = 0;
  isDead = false;
  readyToPlay = false;

}

function keyPressed() {

  if (!levelSelector){

    if (key == '1'){
      level = 1;
      bird = new Bird(40, 0.1, 4);
      pipe = new Pipes(5);
      levelSelector = true;
    }
    else if (key == '2'){
      level = 2;
      bird = new Bird(42, 0.13, 4.5);
      pipe = new Pipes(6);
      levelSelector = true;
    }
    else if (key == '3'){
      level = 3;
      bird = new Bird(44, 0.16, 5);
      pipe = new Pipes(7);
      levelSelector = true;
    }
  }
  else {
    if (keyCode == RETURN && !isDead) {
      bird.up();
    }
    print(readyToPlay);
    print(isDead);
    if (keyCode == RETURN && !readyToPlay && isDead){
      readyToPlay = true;
      bird.x = windowWidth/2;  //so bird is in the middle
      bird.y = windowHeight/2;
      pipeList = [];
    } else if (keyCode == RETURN  && readyToPlay){
      restart();
    }
  }





}
