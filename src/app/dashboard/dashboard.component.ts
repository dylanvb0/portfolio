import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { DashboardItem } from '../DashboardItem';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dashboardItems : DashboardItem[];

  constructor(
    private dashboardService : DashboardService
  ) { }

  ngOnInit() {
    this.getDashboardItems()
  }

  getDashboardItems() {
    this.dashboardService.getDashboardItems().subscribe(items => this.dashboardItems = items);
  }

}
