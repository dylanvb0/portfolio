import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { Client } from './Client';
import { ClientService } from './client.service';

@Injectable()
export class SessionService {

  private client : Client = null;

  private website = 'http://dylanvb.me/api/';
  private method = '/clients';

  constructor(
    private clientService : ClientService,
    private datePipe : DatePipe
  ) {}

   logIn(email : string, password : string) : Observable<boolean>{
     return this.clientService.authenticateClient(email, password)
      .map((data : Client) => {
        this.client = data;
        console.log(this.client);
        sessionStorage.setItem('session_token', data.session_token);
        sessionStorage.setItem('token_expiration', this.datePipe.transform(data.token_expiration, 'yyyy-MM-dd HH:mm:ss'));
        return data != null;
      })
   }

   isLoggedIn(){
     console.log(!!this.client);
     return !!this.client && this.clientService.getNamespace() === this.client.namespace;
   }

  logOut(){
    sessionStorage.removeItem('session_token');
    sessionStorage.removeItem('token_expiration');
    this.client = null;
  }

   getClient(){
     // console.log(this.client);
     return this.client;
   }

}
