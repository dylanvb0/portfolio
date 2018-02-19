import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';

import { environment } from '../environments/environment';
import { ProjectService } from './project.service';
import { ClientService } from './client.service';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectComponent } from './project/project.component';

const appRoutes = [
  {path: 'dashboard', component: DashboardComponent },
  {path: 'projects', component: ProjectsComponent },
  {path: 'about', component: AboutComponent },
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    AboutComponent,
    DashboardComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production})
  ],
  providers: [
    ProjectService,
    ClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
