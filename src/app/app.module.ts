import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FormsModule } from '@angular/forms';

import { environment } from '../environments/environment';
import { ProjectService } from './project.service';
import { ClientService } from './client.service';
import { SessionService } from './session.service';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectComponent } from './project/project.component';
import { EditProjectsComponent } from './edit-projects/edit-projects.component';
import { ProjectFormComponent } from './project-form/project-form.component';
import { EditDashboardComponent } from './edit-dashboard/edit-dashboard.component';
import { EditAboutComponent } from './edit-about/edit-about.component';
import { ClientComponent } from './client/client.component';
import { CmsLoginComponent } from './cms-login/cms-login.component';

const appRoutes = [
  {path: 'dashboard', component: DashboardComponent },
  {path: 'projects', component: ProjectsComponent },
  {path: 'about', component: AboutComponent },
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'login', redirectTo: '/cms/login'},
  {path: 'cms/login', component: CmsLoginComponent },
  {path: 'cms/:namespace/dashboard', component: EditDashboardComponent },
  {path: 'cms/:namespace/projects', component: EditProjectsComponent },
  {path: 'cms/:namespace/about', component: EditAboutComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    AboutComponent,
    DashboardComponent,
    ProjectComponent,
    EditProjectsComponent,
    ProjectFormComponent,
    EditDashboardComponent,
    EditAboutComponent,
    ClientComponent,
    CmsLoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    FormsModule
  ],
  providers: [
    ProjectService,
    ClientService,
    SessionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
