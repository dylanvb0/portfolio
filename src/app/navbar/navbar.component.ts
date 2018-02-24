import { Component, OnInit } from '@angular/core';
import { Client } from '../Client';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [SessionService]
})
export class NavbarComponent implements OnInit {

  session : SessionService;

  constructor(
    private sessionService : SessionService,
  ){
    this.session = this.sessionService;
    document.addEventListener("DOMContentLoaded", function(event) {
      const hamburger = document.querySelector(".hamburger");
      console.log(hamburger);
      hamburger.addEventListener("click", (e) => {
        hamburger.classList.toggle("is-active");
        document.querySelector(".side-bar").classList.toggle("open");
      });

      document.addEventListener("click", (e) => {
        
      });
    });
  }

  ngOnInit() {
  }

}
