import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { About } from './About';
import { ClientService } from './client.service';
import { AlertMessageService } from './alert-message.service';


@Injectable()
export class AboutService {

  private website = 'https://dylanvb.me/api/';
  private method = '/about';
  public about : About;

  constructor(
    private http: HttpClient,
    private client: ClientService,
    private messageService : AlertMessageService
  ) { }

  getAbout(ns?): Observable<void> {
    if(!ns){
      this.client.getNamespace(res => this.getAbout(res)).subscribe();
      return;
    }
    this.http.get(this.website + ns + this.method)
      .map(data => <About>data)
      .subscribe(about => this.about = about[0]);
  }

  saveAbout(ns?): Observable<number> {
    if(!ns) return this.client.getNamespace(res => this.saveAbout(res));
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    console.log(JSON.stringify(this.about));
    return this.http.post(
      this.website + ns + this.method,
      JSON.stringify(this.about),
      httpOptions
    ).map((data : number) => {
      if(data > -1){
        this.messageService.show("success");
      }
      return data;
    });
  }

}
