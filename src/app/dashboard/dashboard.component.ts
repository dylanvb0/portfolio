import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { AboutService } from '../about.service';
import { DashboardItem } from '../DashboardItem';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private intervalId;

  constructor(
    public dashboardService : DashboardService,
    public aboutService : AboutService
  ) { }

  ngOnInit() {
    this.dashboardService.getDashboardItems();
    this.aboutService.getAbout();
    this.startDelayTimer();
  }

  clearDelayTimer() { clearInterval(this.intervalId); }
  startDelayTimer() {
    this.clearDelayTimer();
    this.intervalId = window.setInterval(() => {
      this.dashboardService.finishedTyping = true;
      this.clearDelayTimer();
    }, 0)
  }


}
