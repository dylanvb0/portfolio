import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized } from '@angular/router';
import { Client } from '../Client';
import { SessionService } from '../session.service';
import { AdminSessionService } from '../admin-session.service';
import { ClientService } from '../client.service';
import { Hsla } from '../../../node_modules/ngx-color-picker';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss', './hamburgers.css']
})
export class NavbarComponent implements OnInit {
  public pColor: string = '#ffffff';
  public isOpen: boolean = false;

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
          // (Array.from(document.querySelectorAll('.active'))).forEach(function(elem) {
          //  (elem as HTMLElement).style.backgroundColor = sessionStorage.getItem("sColor");
          // });
          if(this.pColor) {
            if(this.pColor == "#4AA0DD") {document.querySelector(".color.blue").classList.add("selected");}
            if(this.pColor == "#EC7575") {document.querySelector(".color.red").classList.add("selected");}
            if(this.pColor == "#a29bfe") {document.querySelector(".color.purple").classList.add("selected");}
            if(this.pColor == "#EEAA7B") {document.querySelector(".color.orange").classList.add("selected");}
          }
        }, 0);
      }
    });
  }

  ngOnInit() {
      //this.client_service.getClient();
      let defaultPrimary = "#4AA0DD";
      let defaultSecondary = "#F5A623";

      document.querySelector("body").style.setProperty('--primary-color', defaultPrimary);
      document.querySelector("body").style.setProperty('--secondary-color', defaultSecondary);
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
    var self = this;

    if(pColor != "") {
      //Clear old bottom color outline
      Array.from(document.querySelectorAll('.selected')).forEach(function(elem) {
        elem.classList.remove("selected");
      });

     //Add new bottom color outline
     if(pColor == "#4AA0DD") {document.querySelector(".color.blue").classList.add("selected");}
     else if(pColor == "#EC7575") {document.querySelector(".color.red").classList.add("selected");}
     else if(pColor == "#a29bfe") {document.querySelector(".color.purple").classList.add("selected");}
     else if(pColor == "#EEAA7B") {document.querySelector(".color.orange").classList.add("selected");}
     else {document.querySelector(".color.selector").classList.add("selected");}
    }

    if(pColor != "" && sColor == "") { //Color Wheel Selection
      let complimentaryColor = self.hexToComplimentary(pColor);
      sColor = complimentaryColor;
    } else if(pColor != "" && sColor != "") { //Switching color themes with preset option
      // Array.from(document.querySelectorAll('.active')).forEach(function(elem) {
      //   (elem as HTMLElement).style.backgroundColor = sColor;
      // });
    } else { //Navigating to new page

      // var elems = document.querySelectorAll('.side-bar li a');
      // [].forEach.call(elems, function(elem) {
      //   elem.style.backgroundColor = "transparent";
      // });
    }

    // Array.from(document.querySelectorAll('.active')).forEach(function(elem) {
    //   (elem as HTMLElement).style.backgroundColor = sColor;
    // });

    if(pColor != "") document.querySelector("body").style.setProperty('--primary-color', pColor);
    if(sColor != "") document.querySelector("body").style.setProperty('--secondary-color', sColor);

    var sidebar = document.querySelector(".side-bar");
    (sidebar as HTMLElement).style.background = "linear-gradient(" + this.shadeColor(pColor, 50) + ", " + this.shadeColor(pColor, -40) + ")";
  }

  /* hexToComplimentary : Converts hex value to HSL, shifts
  * hue by 180 degrees and then converts hex, giving complimentary color
  * as a hex value
  * @param  [String] hex : hex value
  * @return [String] : complimentary color as hex value
  */
  private hexToComplimentary(hex){

    // Convert hex to rgb
    // Credit to Denis http://stackoverflow.com/a/36253499/4939630

    console.log(hex);
    var rgb = 'rgb(' + (hex = hex.replace('#', '')).match(new RegExp('(.{' + hex.length/3 + '})', 'g')).map(function(l) { return parseInt(hex.length%2 ? l+l : l, 16); }).join(',') + ')';

    // Get array of RGB values
    var rgbArr = rgb.replace(/[^\d,]/g, '').split(',');

    var r : any = rgbArr[0];
    var g : any = rgbArr[1];
    var b : any = rgbArr[2];

    // Convert RGB to HSL
    // Adapted from answer by 0x000f http://stackoverflow.com/a/34946092/4939630
    r /= 255.0;
    g /= 255.0;
    b /= 255.0;
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2.0;

    if(max == min) {
        h = s = 0;  //achromatic
    } else {
        var d = max - min;
        s = (l > 0.5 ? d / (2.0 - max - min) : d / (max + min));

        if(max == r && g >= b) {
            h = 1.0472 * (g - b) / d ;
        } else if(max == r && g < b) {
            h = 1.0472 * (g - b) / d + 6.2832;
        } else if(max == g) {
            h = 1.0472 * (b - r) / d + 2.0944;
        } else if(max == b) {
            h = 1.0472 * (r - g) / d + 4.1888;
        }
    }

    h = h / 6.2832 * 360.0 + 0;

    // Shift hue to opposite side of wheel and convert to [0-1] value
    h+= 180;
    if (h > 360) { h -= 360; }
    h /= 360;

    // Convert h s and l values into r g and b values
    // Adapted from answer by Mohsen http://stackoverflow.com/a/9493060/4939630
    if(s === 0){
        r = g = b = l; // achromatic
    } else {
        var hue2rgb = function hue2rgb(p, q, t){
            if(t < 0) t += 1;
            if(t > 1) t -= 1;
            if(t < 1/6) return p + (q - p) * 6 * t;
            if(t < 1/2) return q;
            if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
            return p;
        };

        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;

        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }

    r = Math.round(r * 255);
    g = Math.round(g * 255);
    b = Math.round(b * 255);

    // Convert r b and g values to hex
    var rgbNum = b | (g << 8) | (r << 16);
    return "#" + (0x1000000 | rgbNum).toString(16).substring(1);
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
