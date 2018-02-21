import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.scss']
})
export class EditAboutComponent implements OnInit {

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
