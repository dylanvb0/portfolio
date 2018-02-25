import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../Client';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [SessionService]
})
export class NavbarComponent implements OnInit {

  constructor(
    public session : SessionService,
    private router : Router
  ){
    console.log(this.session.getClient());
    // document.addEventListener("DOMContentLoaded", function(event) {
    //   const hamburger = document.querySelector(".hamburger");
    //   console.log(hamburger);
    //   hamburger.addEventListener("click", (e) => {
    //     hamburger.classList.toggle("is-active");
    //     document.querySelector(".side-bar").classList.toggle("open");
    //   });
    //
    //   document.addEventListener("click", (e) => {
    //
    //   });
    // });
  }

  ngOnInit() {
  }

  logOut() : void {
    this.session.logOut();
    this.router.navigateByUrl('/cms/login');
  }

}
