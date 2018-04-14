import { Component, OnInit, Input } from '@angular/core';
import { ChartItem } from '../ChartItem';

@Component({
  selector: 'app-chart-item-form',
  templateUrl: './chart-item-form.component.html',
  styleUrls: ['./chart-item-form.component.scss']
})
export class ChartItemFormComponent implements OnInit {

  @Input() item : ChartItem;

  constructor() { }

  ngOnInit() {
  }

}
