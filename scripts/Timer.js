class Timer {

  constructor(timeReceived){
      this.setTime = timeReceived;
      this.startTime = 0;

  }

  start(){
      this.startTime = millis();
  }

  isFinished() {
      let passedTime = millis() - this.startTime;
      if (passedTime > this.setTime)
          return true;
      else
          return false;
  }
}
