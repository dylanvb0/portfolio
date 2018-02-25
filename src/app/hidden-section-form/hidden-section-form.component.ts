import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HiddenSection } from '../HiddenSection';

@Component({
  selector: 'app-hidden-section-form',
  templateUrl: './hidden-section-form.component.html',
  styleUrls: ['./hidden-section-form.component.scss']
})
export class HiddenSectionFormComponent implements OnInit {

  @Input() section : HiddenSection;
  @Output() onDelete = new EventEmitter<HiddenSection>();
  constructor() { }

  ngOnInit() {
  }

  removeSection() : void {
    this.onDelete.emit(this.section);
  }

}
