import { Component, OnInit, Input} from '@angular/core';
import { HiddenSection } from '../HiddenSection';

@Component({
  selector: 'app-hidden-section-form',
  templateUrl: './hidden-section-form.component.html',
  styleUrls: ['./hidden-section-form.component.scss']
})
export class HiddenSectionFormComponent implements OnInit {

  @Input() section : HiddenSection;
  @Input() sections : HiddenSection[];
  constructor() { }

  ngOnInit() {
  }

  removeSection() : void {
    this.sections.splice(this.sections.indexOf(this.section));
  }

}
