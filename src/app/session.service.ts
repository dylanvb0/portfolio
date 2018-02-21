import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Client } from './Client';
import { ClientService } from './client.service';

@Injectable()
export class SessionService {

  private logged_in : boolean;
  private client : Client;

  private website = 'http://dylanvb.me/api/';
  private method = '/clients';

  constructor(private clientService : ClientService) {
    this.logged_in = false;
   }

   logIn(email : string, password : string) : Observable<boolean>{
     return this.clientService.authenticateClient(email, password)
      .map((data : Client) => {
        this.logged_in = true;
        this.client = data;
        return data != null;
      })
   }

   isLoggedIn(){
     return this.logged_in;
   }

   logOut(){
     this.logged_in = false;
     this.client = null;
   }

   getClient(){
     return this.client;
   }

}
