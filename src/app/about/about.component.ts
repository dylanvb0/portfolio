import { Component, OnInit } from '@angular/core';
import { About } from '../About';
import { AboutService } from '../about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  about : About;

  constructor(
    private aboutService: AboutService
  ) { }

  ngOnInit() {
    this.getAbout();
  }

  getAbout(): void {
    this.aboutService.getAbout().subscribe(about => this.about = about[0]);
  }

}
