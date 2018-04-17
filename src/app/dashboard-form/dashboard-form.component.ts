import { Component, OnInit, Input } from '@angular/core';
import { DashboardItem } from '../DashboardItem';
import { DashboardService } from '../dashboard.service';
import { SimpleDashboardBody } from '../SimpleDashboardBody';
import { ListDashboardBody } from '../ListDashboardBody';
import { HorizontalBarChartDashboardBody } from '../HorizontalBarChartDashboardBody';

@Component({
  selector: 'app-dashboard-form',
  templateUrl: './dashboard-form.component.html',
  styleUrls: ['./dashboard-form.component.scss']
})
export class DashboardFormComponent implements OnInit {

  @Input() item : DashboardItem;
  @Input() items : DashboardItem[];

  constructor(
    private dashboardService : DashboardService
  ) { }

  ngOnInit() {
  }

  saveChanges() : void {
    this.dashboardService.saveDashboardItem(this.item).subscribe(item_id => {
      if(this.item.id == null){
        this.items.push(this.item);
      }
      this.item.id = item_id;
    })
  }

  deleteItem(): void {
    this.dashboardService.deleteDashboardItem(this.item).subscribe(obj => {
      this.items.splice(this.items.indexOf(this.item));
      this.item = new DashboardItem("simple");
    });
  }

  sortDashboardItems(){
    this.dashboardService.sortDashboardItems();
  }

  setBody(){
    if(this.item.type === "simple"){
      this.item.body = new SimpleDashboardBody();
    }else if(this.item.type === "list"){
      this.item.body = new ListDashboardBody(null);
    }else if(this.item.type === "horizontal_bar"){
      this.item.body = new HorizontalBarChartDashboardBody(null);
    }
  }

}
