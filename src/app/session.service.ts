import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Client } from './Client';
import { ClientService } from './client.service';

@Injectable()
export class SessionService {

  private client : Client;

  private website = 'http://dylanvb.me/api/';
  private method = '/clients';

  constructor(private clientService : ClientService) {}

   logIn(email : string, password : string) : Observable<boolean>{
     return this.clientService.authenticateClient(email, password)
      .map((data : Client) => {
        this.client = data;
        return data != null;
      })
   }

   isLoggedIn(){
     return this.client != null &&
      this.clientService.getNamespace() === this.client.namespace;
   }

   logOut(){
     this.client = null;
   }

   getClient(){
     return this.client;
   }

}
