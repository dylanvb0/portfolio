import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../Project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  @Input() project : Project;
  bottomVisible : boolean = false;

  constructor() { }

  ngOnInit() {
  }

  visitMarketingSite() : void{
    window.open(this.project.marketing_url, '_blank');
  }

}
