import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from '../photo.service';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-edit-photos',
  templateUrl: './edit-photos.component.html',
  styleUrls: ['./edit-photos.component.scss']
})
export class EditPhotosComponent implements OnInit {

  @ViewChild('photoInput') photoInput;
  photos : string[];

  constructor(
    private photoService: PhotoService,
    private client: ClientService,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
    this.getPhotos();
  }

  uploadPhoto() {
    this.photoService.uploadPhoto(this.photoInput.nativeElement.files[0]).subscribe(res => {
      this.photos.push(this.photoInput.nativeElement.files[0].name);
    });
  }

  getPhotos() {
    this.photoService.getPhotos().subscribe(photos => this.photos = photos);
  }

  deletePhoto(photo) {
    this.photoService.deletePhoto(photo).subscribe(res => {
      this.photos.splice(this.photos.indexOf(photo));
    });
  }

  getPhotoUrl(name) {
    const routeNs = this.route.snapshot.paramMap.get('namespace');
    return "https://dylanvb.me/wwwroot/" + routeNs + "/images/" + name;
  }


}
