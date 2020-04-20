//Project Name: Flappy Swoop
/*If your IDE supports linting see the .jshintrc document
in the project root folder for linting options*/

var bird
var pipe
var jumping = false;

function setup() {
  createCanvas(windowWidth, windowHeight);

  bird = new Bird();
  pipe = new Pipes();
}

function draw() {
  background(255);
  bird.display();
  pipe.display();
  pipe.drop();

  if (!jumping){
    bird.drop();


  }
  
  //if (bird.hitBottom()){
    //add something to reset?
    //score -=?
  //}
}

function mousePressed() {
  jumping = true;
  bird.up();
  jumping = false;

}
