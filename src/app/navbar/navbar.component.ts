import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized } from '@angular/router';
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
  ){
    this.router.events.subscribe(event => { //Needed to subscribe to the router change event because calling
                                            //a function on <a (click)> did not yet know the correct .active <a>
                                            //There is defintely a way better way to do this...
      if(event.constructor.name === "NavigationStart") {
        /*
          This 0 ms timeout gets around a timing issue with angular router NavigationStart invocation time.
          When NavigationStart is fired, the .active class has not yet been applied to the proper <a> tag
          By using a 0 ms timeout, we ensure that the class has first been added.

          This is not a good permanent solution because it blinks lol.
        */
        setTimeout(function (){
          let pColor = sessionStorage.getItem("pColor");
          let sColor = sessionStorage.getItem("sColor");

          (Array.from(document.querySelectorAll('.active'))).forEach(function(elem) {
           (elem as HTMLElement).style.backgroundColor = sessionStorage.getItem("sColor");
          });

          if(pColor == "#4AA0DD") {document.querySelector(".color.blue").classList.add("selected");}
          if(pColor == "#EC7575") {document.querySelector(".color.red").classList.add("selected");}
          if(pColor == "#a29bfe") {document.querySelector(".color.purple").classList.add("selected");}
          if(pColor == "#EEAA7B") {document.querySelector(".color.orange").classList.add("selected");}
        }, 0);
      }
    });
  }

  ngOnInit() {
      //this.client_service.getClient();
      //probably don't need to be storing my colors in session, could just use window variables
      sessionStorage.setItem('pColor', '#4AA0DD');
      sessionStorage.setItem('sColor', '#F5A623');
  }

  logOutClient() : void {
    this.client_session.logOut();
    this.router.navigateByUrl('/cms/login');
  }

  logOutAdmin() : void {
    this.admin_session.logOut();
    this.router.navigateByUrl('/admin/login');
  }

  switchTheme(pColor, sColor) {
    Array.from(document.querySelectorAll('.selected')).forEach(function(elem) {
     elem.classList.remove("selected");
    });

    if(pColor == "#4AA0DD") {document.querySelector(".color.blue").classList.add("selected");}
    if(pColor == "#EC7575") {document.querySelector(".color.red").classList.add("selected");}
    if(pColor == "#a29bfe") {document.querySelector(".color.purple").classList.add("selected");}
    if(pColor == "#EEAA7B") {document.querySelector(".color.orange").classList.add("selected");}

    if(pColor != "" && sColor != "") {
      sessionStorage.setItem('pColor', pColor);
      sessionStorage.setItem('sColor', sColor);
    } else {
      pColor = sessionStorage.getItem('pColor');
      sColor = sessionStorage.getItem('sColor');
    }

    var elems = document.querySelectorAll('.side-bar li a');

    [].forEach.call(elems, function(elem) {
      elem.style.backgroundColor = "transparent";
    });

    //Same issue as above timing issue, need class to be active before accessing .active
    setTimeout(function (){
      Array.from(document.querySelectorAll('.active')).forEach(function(elem) {
       (elem as HTMLElement).style.backgroundColor = sColor;
      });
    }, 0);

    var items = document.getElementsByClassName("theme-primary-color");
    for (let i = 0; i < items.length; i++) {
        if(window.getComputedStyle(items[i], null).getPropertyValue("background-color")) {
          (items[i] as HTMLElement).style.backgroundColor = pColor;
        }
    }

    var sidebar = document.querySelector(".side-bar");
    (sidebar as HTMLElement).style.background = "linear-gradient(" + this.shadeColor(pColor, 50) + ", " + this.shadeColor(pColor, -40) + ")";
  }

  private shadeColor(col, amt) {
    var usePound = false;

    if (col[0] == "#") {
        col = col.slice(1);
        usePound = true;
    }

    var R = parseInt(col.substring(0,2),16);
    var G = parseInt(col.substring(2,4),16);
    var B = parseInt(col.substring(4,6),16);

    R = R + amt;
    G = G + amt;
    B = B + amt;

    if (R > 255) R = 255;
    else if (R < 0) R = 0;

    if (G > 255) G = 255;
    else if (G < 0) G = 0;

    if (B > 255) B = 255;
    else if (B < 0) B = 0;

    var RR = ((R.toString(16).length==1)?"0"+R.toString(16):R.toString(16));
    var GG = ((G.toString(16).length==1)?"0"+G.toString(16):G.toString(16));
    var BB = ((B.toString(16).length==1)?"0"+B.toString(16):B.toString(16));

    return (usePound?"#":"") + RR + GG + BB;
  }

}
