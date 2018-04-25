import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { of } from 'rxjs/observable/of';
import { Client } from './Client';

@Injectable()
export class ClientService {

  private website = 'https://dylanvb.me/api/clients';
  public client : Client;

  constructor(
    private route : Router,
    private http : HttpClient
  ) {
    this.client = new Client();
  }

  getNamespace(): string {
    var routeNs = this.route.parseUrl(this.route.url).root.children.primary.segments[1];
    if(routeNs != null) return routeNs.toString();
    var currentDomain = window.location.hostname;
    if(this.client.domain == currentDomain) return this.client.namespace;
    console.log("cache miss");
    this.getClient().subscribe(ns => {
      return this.client.namespace;
    })
  }

  getClient(): Observable<Client> {
    if(this.client.id != null){
      return of(this.client);
    }else{
      this.client.domain = window.location.hostname;
      if(this.client.domain == "localhost"){
        this.client.namespace = "dylanvb";
        this.client.name = "Dylan Vander Berg";
        return of(this.client);
      }else{
        return this.http.get(this.website + '/' + this.client.domain)
          .map((client : Client) => {
            this.client = client;
            return this.client;
          });
      }
    }
  }

  authenticateClient(email : string, password : string): Observable<Client> {
    return this.http.get(this.website + '/' + btoa(email) + '/' + btoa(password))
      .map((data : Client) => data);
  }
}
