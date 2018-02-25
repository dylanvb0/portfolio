import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { of } from 'rxjs/observable/of';
import { Client } from './Client';

@Injectable()
export class ClientService {

  private website = 'http://dylanvb.me/api/clients';
  private domain = 'localhost';
  private namespace = 'dylanvb';

  constructor(
    private route : Router,
    private http : HttpClient
  ) { }

  getNamespace(): string {
    var routeNs = this.route.parseUrl(this.route.url).root.children.primary.segments[1];
    if(routeNs != null) return routeNs.toString();
    var currentDomain = window.location.hostname;
    if(this.domain == currentDomain) return this.namespace;
    console.log("cache miss");
    this.domain = currentDomain;
    if(currentDomain == "localhost"){
      this.namespace = "dylanvb";
      return this.namespace;
    }else{
      var req = this.http.get(this.website + '/' + currentDomain)
        .map((client : Client) => {
          this.namespace = client.namespace;
          return this.namespace;
        });
      req.subscribe(ns => {
        return this.namespace;
      })
    }
  }

  authenticateClient(email : string, password : string): Observable<Client> {
    return this.http.get(this.website + '/' + btoa(email) + '/' + btoa(password))
      .map((data : Client) => data);
  }
}
