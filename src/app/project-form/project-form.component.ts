import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../Project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent implements OnInit {

  @Input() project : Project;
  @Input() projects : Project[];

  constructor(
    private projectService : ProjectService,
  ) { }

  ngOnInit() { }

  saveChanges() : void {
    this.projectService.saveProject(this.project).subscribe(project_id => {
      if(this.project.id == null){
        this.projects.push(this.project);
      }
      this.project.id = project_id;
    });
  }

  deleteProject(): void {
    this.projectService.deleteProject(this.project).subscribe(obj => {
      this.projects.splice(this.projects.indexOf(this.project));
      this.project = new Project();
    });
  }

}
