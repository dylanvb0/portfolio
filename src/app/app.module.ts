import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FormsModule } from '@angular/forms';

import { environment } from '../environments/environment';
import { ProjectService } from './project.service';
// import { DashboardService } from './dashboard.service';
import { ClientService } from './client.service';
import { SessionService } from './session.service';
import { AlertMessageService } from './alert-message.service';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
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
import { HiddenSectionsFormComponent } from './hidden-sections-form/hidden-sections-form.component';
import { HiddenSectionFormComponent } from './hidden-section-form/hidden-section-form.component';
import { MyHttpInterceptor } from './http-interceptor';
import { AlertMessageComponent } from './alert-message/alert-message.component';

// import { MDBBootstrapModule } from 'angular-bootstrap-md';

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
    NavbarComponent,
    ProjectsComponent,
    AboutComponent,
    DashboardComponent,
    ProjectComponent,
    EditProjectsComponent,
    ProjectFormComponent,
    EditDashboardComponent,
    EditAboutComponent,
    ClientComponent,
    CmsLoginComponent,
    HiddenSectionsFormComponent,
    HiddenSectionFormComponent,
    AlertMessageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    ),
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    FormsModule,
    // MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    ProjectService,
    // DashboardService,
    ClientService,
    SessionService,
    AlertMessageService,
    DatePipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyHttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
