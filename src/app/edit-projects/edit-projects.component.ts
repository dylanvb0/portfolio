import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../Project';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-edit-projects',
  templateUrl: './edit-projects.component.html',
  styleUrls: ['./edit-projects.component.scss']
})
export class EditProjectsComponent implements OnInit {

  projects : Project[];
  project : Project;

  constructor(
    private projectService : ProjectService,
    private session : SessionService,
    private router : Router
  ) { }

  ngOnInit() {
    if(!this.session.isLoggedIn()){
      this.router.navigateByUrl('/cms/login');
    }
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
