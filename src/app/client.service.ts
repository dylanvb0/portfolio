import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
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
    // var routeNs = this.route.routerState.snapshot._root.children[0].value.params["namespace"];
    var routeNs = this.route.parseUrl(this.route.url).root.children.primary.segments[1];
    // var routeNs = this.route.snapshot.paramMap;
    console.log(routeNs);
    if(routeNs != null) return routeNs.toString();
    var currentDomain = window.location.hostname;
    if(this.domain == currentDomain) return this.namespace;
    console.log("cache miss");
    this.domain = currentDomain;
    if(currentDomain == "localhost" || currentDomain == "dylanvb.me"){
      this.namespace = "dylanvb";
      return this.namespace;
    }else{
      this.namespace = "danieldmiller";
      return this.namespace;
    }
  }

  authenticateClient(email : string, password : string): Observable<Client> {
    return this.http.get(this.website + '/' + email + '/' + password)
      .map((data : Client) => data);
  }
}
