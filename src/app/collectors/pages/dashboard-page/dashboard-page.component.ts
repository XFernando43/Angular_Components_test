import { Component } from '@angular/core';
import { CollectorDataTableComponent } from '../../components/collector-data-table/collector-data-table.component';
@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [CollectorDataTableComponent],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css'
})
export class DashboardPageComponent {

}
