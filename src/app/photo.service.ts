import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientService } from './client.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PhotoService {

  private website = 'https://dylanvb.me/api/';
  private method = '/photos';


  constructor(
    private http: HttpClient,
    private client: ClientService
  ) { }

  uploadPhoto(photo) : Observable<string>{
    console.log(photo);
    let formData = new FormData();
    formData.append('upload', photo);
    console.log(formData);
    var req = this.http.post(this.website + this.client.getNamespace() + this.method, formData)
      .map(res => {
        return "uploaded";
      });
    console.log(req);
    return req;
  }

  getPhotos() : Observable<string[]>{
    return this.http.get(this.website + this.client.getNamespace() + this.method)
      .map((data : any) => <string[]>data);
  }

  deletePhoto(photo) : Observable<number>{
    return this.http.delete(this.website + this.client.getNamespace() + this.method + '/' + photo)
      .map(res => {
        return 0;
      })
  }

}
