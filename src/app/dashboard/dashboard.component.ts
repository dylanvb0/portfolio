import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { DashboardItem } from '../DashboardItem';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    public dashboardService : DashboardService
  ) { }

  ngOnInit() {
    this.dashboardService.getDashboardItems()
  }


}
