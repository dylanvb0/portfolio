import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { AlertMessageService } from '../alert-message.service';

@Component({
  selector: 'app-alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.scss']
})
export class AlertMessageComponent implements OnInit {
  currentVisible : string = "";
  intervalId: number;

  constructor(
    public messageService : AlertMessageService
  ) { }

  ngOnInit() {
    // this.startTimer();
  }

}
