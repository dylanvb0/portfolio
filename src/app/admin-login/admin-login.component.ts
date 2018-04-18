import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { AdminSessionService } from '../admin-session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  admin : Admin;

  constructor(
    private session : AdminSessionService,
    private router : Router
  ) { }

  ngOnInit() {
    this.admin = new Admin();
  }

  login() : void {
    this.session.logIn(this.admin.email, this.admin.password).subscribe(data => {
      if(data){
        this.router.navigateByUrl('/admin/clients');
      }else{
        alert("Login unsuccessful");
      }
    })
  }

}
