import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Project } from './Project';
import { ClientService } from './client.service';
import { AlertMessageService } from './alert-message.service';

@Injectable()
export class ProjectService {

  private website = 'https://dylanvb.me/api/';
  private method = '/projects';
  public projects : Project[];

  constructor(
    private http: HttpClient,
    private client: ClientService,
    private messageService : AlertMessageService
  ) { }

  getProjects(ns?): Observable<void> {
    if(!ns){
      this.client.getNamespace(res => this.getProjects(res)).subscribe();
      return;
    }
    this.http.get(this.website + ns + this.method)
      .map((data : any) => {
        return data.map(obj => <Project>obj);
      }).subscribe(projects => {
        this.projects = projects;
        this.sortProjects();
      });
  }

  saveProject(project, ns?): Observable<number> {
    if(!ns) return this.client.getNamespace(res => this.saveProject(project, res));
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    console.log(JSON.stringify(project));
    return this.http.post(
      this.website + ns + this.method,
      JSON.stringify(project),
      httpOptions
    ).map((data : number) => {
      if(data > -1){
        this.messageService.show("success");
      }
      return data;
    });
  }

  deleteProject(project, ns?): Observable<Object> {
    if(!ns) return this.client.getNamespace(res => this.deleteProject(project, ns));
    return this.http.delete(this.website + ns + this.method + "/" + project.id);
  }

  sortProjects() {
    console.log("sorting");
    this.projects.sort( (a,b) => {
      if (a.year > b.year){
        return -1;
      }else if(a.year < b.year){
        return 1;
      }else{
        if(a.sort_order > b.sort_order){
          return 1;
        }else if(a.sort_order < b.sort_order){
          return -1;
        }
      }
      return 0;
    })
  }

}
