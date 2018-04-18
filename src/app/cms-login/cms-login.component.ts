import { Component, OnInit } from '@angular/core';
import { Client } from '../Client';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cms-login',
  templateUrl: './cms-login.component.html',
  styleUrls: ['./cms-login.component.scss']
})
export class CmsLoginComponent implements OnInit {

  client : Client;

  constructor(
    private session : SessionService,
    private router : Router
  ) { }

  ngOnInit() {
    this.client = new Client();
  }

  login() : void {
    this.session.logIn(this.client.email, this.client.password).subscribe(data => {
      if(data){
        var namespace = this.session.getClient().namespace;
        console.log(namespace);
        this.router.navigateByUrl('/cms/' + namespace + '/dashboard');
        console.log("should have navigated to: /cms/" + namespace + "/dashboard");
      }else{
        alert("Login unsuccessful");
      }
    })
  }

}
