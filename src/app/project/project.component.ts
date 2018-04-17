import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../Project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  @Input() project : Project;
  bottomVisible : boolean = false;

  constructor(
    public projectService : ProjectService
  ) { }

  ngOnInit() {
  }

  visitMarketingSite() : void{
    window.open(this.project.marketing_url, '_blank');
  }

  shouldShowYear(id) : boolean {
    if(typeof this.projectService.projects === 'undefined') return false;
    for(var i = 0; i < this.projectService.projects.length; i++){
      if(this.projectService.projects[i].id === id){
        if(i == 0) return true;
        if(this.projectService.projects[i].year == this.projectService.projects[i-1].year){
          return false;
        }
        return true;
      }
    }
    return false;
  }

}
