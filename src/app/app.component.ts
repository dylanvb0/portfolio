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

  constructor(
    private session : SessionService,
    private router : Router
  ){}

  logOut() : void {
    this.session.logOut();
    this.router.navigateByUrl('/cms/login');
  }

}
