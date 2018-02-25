import { Injectable } from '@angular/core';

@Injectable()
export class AlertMessageService {
  currentMessageType : string = "";
  private intervalId : number;

  constructor() { }

  show(type : string){
    this.currentMessageType = type;
    this.startTimer();
  }

  clearTimer() { clearInterval(this.intervalId); }

  startTimer() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.currentMessageType = "";
      this.clearTimer();
    }, 5000)
  }

}
