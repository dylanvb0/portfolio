import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';
import { DashboardService } from '../dashboard.service';
import { DashboardItem } from '../DashboardItem';

@Component({
  selector: 'app-edit-dashboard',
  templateUrl: './edit-dashboard.component.html',
  styleUrls: ['./edit-dashboard.component.scss']
})
export class EditDashboardComponent implements OnInit {

  currItem : DashboardItem;

  constructor(
    private session : SessionService,
    private router : Router,
    private dashboardService : DashboardService
  ) { }

  ngOnInit() {
    if(!this.session.isLoggedIn()){
      this.router.navigateByUrl('/cms/login');
    }
    this.dashboardService.getDashboardItems();
    this.setNewItem();
  }


  setNewItem(): void {
    this.currItem = new DashboardItem("simple");
  }

}
