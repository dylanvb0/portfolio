import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-edit-dashboard',
  templateUrl: './edit-dashboard.component.html',
  styleUrls: ['./edit-dashboard.component.scss']
})
export class EditDashboardComponent implements OnInit {

  constructor(
    private session : SessionService,
    private router : Router
  ) { }

  ngOnInit() {
    if(!this.session.isLoggedIn()){
      this.router.navigateByUrl('/cms/login');
    }
  }

}
