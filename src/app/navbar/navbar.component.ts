import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../Client';
import { SessionService } from '../session.service';
import { AdminSessionService } from '../admin-session.service';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss', './hamburgers.css']
})
export class NavbarComponent implements OnInit {


  constructor(
    public client_session : SessionService,
    public admin_session : AdminSessionService,
    public client_service : ClientService,
    private router : Router
  ){ }

  ngOnInit() {
    // this.client_service.getClient();
  }

  logOutClient() : void {
    this.client_session.logOut();
    this.router.navigateByUrl('/cms/login');
  }

  logOutAdmin() : void {
    this.admin_session.logOut();
    this.router.navigateByUrl('/admin/login');
  }

}
