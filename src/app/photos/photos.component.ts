import { Component, OnInit, Input } from '@angular/core';
import { PhotoService } from '../photo.service';
import { ClientService } from '../client.service';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  @Input() photos: string[];
  @Input() width: number;
  private startIndex : number;

  constructor(
    private photoService: PhotoService,
    private client: ClientService,
    private session: SessionService
  ) { }

  ngOnInit() {
    this.startIndex = 0;
  }

  getPhotoUrl(name) {
    if(typeof this.client.client.namespace !== 'undefined'){
      return "https://dylanvb.me/wwwroot/" + this.client.client.namespace + "/images/" + name;
    }else{
      return "https://dylanvb.me/wwwroot/" + this.session.getClient().namespace + "/images/" + name;
    }
  }

  photoShouldShow(index) : boolean {
    let endIndex = this.startIndex + this.width - 1;
    if(index >= this.startIndex && index <= endIndex){
      return true;
    }
    return false;
  }
}
