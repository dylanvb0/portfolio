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
    private projectService : ProjectService
  ) { }

  ngOnInit() {
  }

  saveChanges() : void {
    if(this.project.id == null){
      this.projects.push(this.project);
    }
    this.projectService.saveProject(this.project).subscribe(project_id => this.project.id = project_id);
  }

  deleteProject(): void {
    this.projectService.deleteProject(this.project).subscribe();
    this.projects = this.projects.filter(obj => obj.id !== this.project.id);
    this.project = new Project();
  }
}
