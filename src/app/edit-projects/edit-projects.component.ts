import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../Project';

@Component({
  selector: 'app-edit-projects',
  templateUrl: './edit-projects.component.html',
  styleUrls: ['./edit-projects.component.scss']
})
export class EditProjectsComponent implements OnInit {

  projects : Project[];
  project : Project;

  constructor(
    private projectService : ProjectService
  ) { }

  ngOnInit() {
    this.getProjects();
    this.setNewProject();
  }

  getProjects(): void {
    this.projectService.getProjects().subscribe(projects => this.projects = projects);
  }

  setNewProject(): void {
    this.project = new Project();
  }



}
