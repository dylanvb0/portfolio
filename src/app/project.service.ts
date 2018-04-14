import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Project } from './Project';
import { ClientService } from './client.service';

@Injectable()
export class ProjectService {

  private website = 'https://dylanvb.me/api/';
  private method = '/projects';
  public projects : Project[];

  constructor(
    private http: HttpClient,
    private client: ClientService
  ) { }

  getProjects(): void {
    this.http.get(this.website + this.client.getNamespace() + this.method)
      .map((data : any) => {
        return data.map(obj => <Project>obj);
      }).subscribe(projects => {
        this.projects = projects;
        this.sortProjects();
      });
  }

  saveProject(project): Observable<number> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    console.log(JSON.stringify(project));
    return this.http.post(
      this.website + this.client.getNamespace() + this.method,
      JSON.stringify(project),
      httpOptions
    ).map((data : number) => data);
  }

  deleteProject(project): Observable<Object> {
    return this.http.delete(this.website + this.client.getNamespace() + this.method + "/" + project.id);
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
