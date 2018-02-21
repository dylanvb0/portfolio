import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from './Client';
import { SessionService } from './session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [SessionService]
})
export class AppComponent {

  session : SessionService;

  constructor(
    private sessionService : SessionService,
    private router : Router
  ){
    this.session = this.sessionService;
  }

  logOut() : void {
    this.session.logOut();
    this.router.navigateByUrl('/cms/login');
  }

}
