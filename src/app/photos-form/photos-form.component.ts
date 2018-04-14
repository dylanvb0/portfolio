import { Component, OnInit, Input } from '@angular/core';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photos-form',
  templateUrl: './photos-form.component.html',
  styleUrls: ['./photos-form.component.scss']
})
export class PhotosFormComponent implements OnInit {

  @Input() photos: string[];
  photoOptions: string[];

  constructor(
    private photoService: PhotoService
  ) { }

  ngOnInit() {
    this.getPhotos();
  }

  getPhotos(): void {
    this.photoService.getPhotos().subscribe(photos => this.photoOptions = photos);
  }

  newPhoto(ev): void {
    this.photos.push(ev.target.value);
    ev.target.value = "";
  }

  cleanArray(ev,i): void {
    if(ev.target.value == ""){
      this.photos.splice(i, 1);
    }
  }
}
