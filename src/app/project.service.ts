import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Project } from './Project';
import { ClientService } from './client.service';

@Injectable()
export class ProjectService {

  private website = 'dylanvb.me/api/';
  private method = '/projects';

  constructor(
    private http: HttpClient,
    private client: ClientService
  ) { }

  getProjects(): Observable<Project[]> {
    return this.http.get("http://" + this.website + this.client.getNamespace() + this.method)
      .map((data : any) => {
        return data.map(obj => <Project>obj);
      });
  }

  saveProject(project): Observable<number> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post(
      "http://" + this.website + this.client.getNamespace() + this.method,
      JSON.stringify(project),
      httpOptions
    ).map((data : number) => data);
  }

  deleteProject(project): Observable<Object> {
    return this.http.delete("http://" + this.website + this.client.getNamespace() + this.method + "/" + project.id);
  }

}
