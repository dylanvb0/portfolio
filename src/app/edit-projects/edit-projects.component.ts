import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../Project';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';
import { HiddenSection } from '../HiddenSection';

@Component({
  selector: 'app-edit-projects',
  templateUrl: './edit-projects.component.html',
  styleUrls: ['./edit-projects.component.scss']
})
export class EditProjectsComponent implements OnInit {

  project : Project;

  constructor(
    public projectService : ProjectService,
    private session : SessionService,
    private router : Router
  ) { }

  ngOnInit() {
    if(window.location.hostname != 'localhost' && !this.session.isLoggedIn()){
      this.router.navigateByUrl('/cms/login');
    }
    this.getProjects();
    this.setNewProject();
  }

  getProjects(): void {
    this.projectService.getProjects();
  }

  setNewProject(): void {
    this.project = new Project();
    this.project.hidden_sections = new Array<HiddenSection>();
  }



}
