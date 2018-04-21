import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { Client } from './Client';
import { ClientService } from './client.service';

@Injectable()
export class SessionService {

  private client : Client = null;

  private website = 'https://dylanvb.me/api/';
  private method = '/clients';

  constructor(
    private clientService : ClientService,
    private datePipe : DatePipe
  ) {
    var expiration = sessionStorage.getItem('token_expiration');
    if(expiration != null && new Date(expiration) > new Date()){
      this.client = JSON.parse(atob(sessionStorage.getItem('client')));
    }
  }

   logIn(email : string, password : string) : Observable<boolean>{
     return this.clientService.authenticateClient(email, password)
      .map((data : Client) => {
        if(data == null) return false;
        this.client = data;
        sessionStorage.setItem('session_token', data.session_token);
        sessionStorage.setItem('token_expiration', this.datePipe.transform(data.token_expiration, 'yyyy-MM-dd HH:mm:ss'));
        sessionStorage.setItem('client', btoa(JSON.stringify(data)));
        return data != null;
      })
   }

   isLoggedIn(){
     return !!this.client;// && this.clientService.getNamespace() === this.client.namespace;
   }

  logOut(){
    sessionStorage.removeItem('session_token');
    sessionStorage.removeItem('token_expiration');
    sessionStorage.removeItem('client');
    this.client = null;
  }

   getClient(){
     return this.client;
   }

}
