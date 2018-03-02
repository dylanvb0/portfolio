import { Component, OnInit, Input } from '@angular/core';
import { HiddenSection } from '../HiddenSection';
import { AlertMessageService } from '../alert-message.service';

@Component({
  selector: 'app-hidden-sections-form',
  templateUrl: './hidden-sections-form.component.html',
  styleUrls: ['./hidden-sections-form.component.scss']
})
export class HiddenSectionsFormComponent implements OnInit {

  @Input() sections : HiddenSection[];

  constructor(private alertMsg : AlertMessageService) { }

  ngOnInit() {
  }

  newSection() : void {
    this.sections.push(new HiddenSection());
  }


}
