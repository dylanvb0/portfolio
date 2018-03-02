import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { About } from './About';
import { ClientService } from './client.service';

@Injectable()
export class AboutService {

  private website = 'dylanvb.me/api/';
  private method = '/about';

  constructor(
    private http: HttpClient,
    private client: ClientService
  ) { }

  getAbout(): Observable<About> {
    return this.http.get("http://" + this.website + this.client.getNamespace() + this.method)
      .map(data => <About>data);
  }

  saveProject(about): Observable<number> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    console.log(JSON.stringify(about));
    return this.http.post(
      "http://" + this.website + this.client.getNamespace() + this.method,
      JSON.stringify(about),
      httpOptions
    ).map((data : number) => data);
  }

}
