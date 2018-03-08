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

  constructor(
    private photoService: PhotoService,
    private client: ClientService
  ) { }

  ngOnInit() {
  }
  
  getPhotoUrl(name) {
    return "https://dylanvb.me/wwwroot/" + this.client.getNamespace() + "/images/" + name;
  }

}
