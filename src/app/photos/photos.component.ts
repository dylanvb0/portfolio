import { Component, OnInit, Input } from '@angular/core';
import { PhotoService } from '../photo.service';
import { ClientService } from '../client.service';

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
    private client: ClientService
  ) { }

  ngOnInit() {
    this.startIndex = 0;
  }

  getPhotoUrl(name) {
    return "https://dylanvb.me/wwwroot/" + this.client.getNamespace() + "/images/" + name;
  }

  photoShouldShow(index) : boolean {
    let endIndex = this.startIndex + this.width - 1;
    if(index >= this.startIndex && index <= endIndex){
      return true;
    }
    return false;
  }
}
