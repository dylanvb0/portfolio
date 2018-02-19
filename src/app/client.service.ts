import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ClientService {

  private website = 'dylanvb.me/api/';
  private method = '/projects';
  private domain = 'localhost';
  private namespace = 'dylanvb';

  constructor() { }

  getNamespace(): string {
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
}
