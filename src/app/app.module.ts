import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FormsModule } from '@angular/forms';

import { environment } from '../environments/environment';
import { ProjectService } from './project.service';
import { DashboardService } from './dashboard.service';
import { AboutService } from './about.service';
import { ClientService } from './client.service';
import { AdminService } from './admin.service';
import { SessionService } from './session.service';
import { AdminSessionService } from './admin-session.service';
import { PhotoService } from './photo.service';
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

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ColorPickerModule } from 'ngx-color-picker';
import { ClickOutsideModule } from 'ng-click-outside';
import { ListDashboardBodyComponent } from './list-dashboard-body/list-dashboard-body.component';
import { SimpleDashboardBodyComponent } from './simple-dashboard-body/simple-dashboard-body.component';
import { HorizontalBarChartDashboardBodyComponent } from './horizontal-bar-chart-dashboard-body/horizontal-bar-chart-dashboard-body.component';
import { EditPhotosComponent } from './edit-photos/edit-photos.component';
import { PhotosComponent } from './photos/photos.component';
import { PhotosFormComponent } from './photos-form/photos-form.component';
import { DashboardFormComponent } from './dashboard-form/dashboard-form.component';
import { DashboardSimpleBodyFormComponent } from './dashboard-simple-body-form/dashboard-simple-body-form.component';
import { DashboardListBodyFormComponent } from './dashboard-list-body-form/dashboard-list-body-form.component';
import { DashboardHorizontalBarChartBodyFormComponent } from './dashboard-horizontal-bar-chart-body-form/dashboard-horizontal-bar-chart-body-form.component';
import { ChartItemsFormComponent } from './chart-items-form/chart-items-form.component';
import { ChartItemFormComponent } from './chart-item-form/chart-item-form.component';
import { AdminsComponent } from './admins/admins.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

const appRoutes = [
  {path: 'dashboard', component: DashboardComponent },
  {path: 'projects', component: ProjectsComponent },
  {path: 'about', component: AboutComponent },
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'cms/:namespace/dashboard', component: EditDashboardComponent },
  {path: 'cms/:namespace/projects', component: EditProjectsComponent },
  {path: 'cms/:namespace/about', component: EditAboutComponent },
  {path: 'cms/:namespace/photos', component: EditPhotosComponent },
  {path: 'login', redirectTo: '/cms/login'},
  {path: 'cms', redirectTo: '/cms/login'},
  {path: 'cms/login', component: CmsLoginComponent },
  {path: 'admin/login', component: AdminLoginComponent },
  {path: 'admin/clients', component: ClientComponent },
  {path: 'admin/admins', component: AdminsComponent },
  {path: 'admin', redirectTo: '/admin/login'}
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
    AlertMessageComponent,
    ListDashboardBodyComponent,
    SimpleDashboardBodyComponent,
    HorizontalBarChartDashboardBodyComponent,
    EditPhotosComponent,
    PhotosComponent,
    PhotosFormComponent,
    DashboardFormComponent,
    DashboardSimpleBodyFormComponent,
    DashboardListBodyFormComponent,
    DashboardHorizontalBarChartBodyFormComponent,
    ChartItemsFormComponent,
    ChartItemFormComponent,
    AdminsComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    ),
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    FormsModule,
    MDBBootstrapModule.forRoot(),
    ColorPickerModule,
    ClickOutsideModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    ProjectService,
    DashboardService,
    AboutService,
    ClientService,
    AdminService,
    SessionService,
    AdminSessionService,
    PhotoService,
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
