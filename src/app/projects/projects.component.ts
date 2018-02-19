import { Component, OnInit } from '@angular/core';
import { Project } from '../Project';
import { ProjectService } from '../project.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Project[];

  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    this.getProjects();
  }

  // ngAfterViewInit(){
  //   $(".more-details").click( () => {
  //     console.log(this);
  //     $(this).parents("project").find("bottom").toggle();
  //   })
  // }

  getProjects(): void {
    this.projectService.getProjects().subscribe(projects => this.projects = projects);
  }

}
