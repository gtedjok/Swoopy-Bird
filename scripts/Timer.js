class Timer {

  constructor(timeReceived) {
    this.setTime = timeReceived;
    this.startTime = 0;
  }

  start() { //start or restart the timer
    this.startTime = millis();

  }

  isFinished() { //timer finished?
    let passedTime = millis() - this.startTime;
    if (passedTime > this.setTime)
      return true; //ding
    else {
      return false; //still going
    }
  }
}
