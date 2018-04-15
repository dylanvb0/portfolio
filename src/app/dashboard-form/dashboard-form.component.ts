import { Component, OnInit, Input } from '@angular/core';
import { DashboardItem } from '../DashboardItem';
import { DashboardService } from '../dashboard.service';

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

  deleteProject(): void {
    this.dashboardService.deleteDashboardItem(this.item).subscribe(obj => {
      this.items.splice(this.items.indexOf(this.item));
      this.item = new DashboardItem("simple");
    });
  }

  sortDashboardItems(){
    this.dashboardService.sortDashboardItems();
  }

}
