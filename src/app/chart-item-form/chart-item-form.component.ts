import { Component, OnInit, Input } from '@angular/core';
import { ChartItem } from '../ChartItem';

@Component({
  selector: 'app-chart-item-form',
  templateUrl: './chart-item-form.component.html',
  styleUrls: ['./chart-item-form.component.scss']
})
export class ChartItemFormComponent implements OnInit {

  @Input() item : ChartItem;
  @Input() items : ChartItem[];

  constructor() { }

  ngOnInit() {
  }

  removeChartItem() {
    this.items.splice(this.items.indexOf(this.item),1);
  }

  sortChartItems() {
    this.items.sort((a,b) => {
      if(a.sort_order > b.sort_order) return 1;
      if(a.sort_order < b.sort_order) return -1;
      return 0;
    })
  }

}
