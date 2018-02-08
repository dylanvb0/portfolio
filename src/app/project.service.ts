import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Project } from './Project';

@Injectable()
export class ProjectService {

  private website = 'dylanvb.me/api/';
  private method = '/projects';

  constructor(
    private http: HttpClient
  ) { }

  getProjects(): Observable<Project[]> {
    return this.http.get("http://" + this.website + "dylanvb" + this.method)
      .map((data : any) => {
        return data.map(obj => <Project>obj);
      });
  }
}
