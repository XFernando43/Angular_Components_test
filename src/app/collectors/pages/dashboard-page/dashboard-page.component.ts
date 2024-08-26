import { Component } from '@angular/core';
import { CollectorDataTableComponent } from '../../components/collector-data-table/collector-data-table.component';
import { SidebarComponent } from '../../../public/components/sidebar/sidebar.component';
@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [CollectorDataTableComponent, SidebarComponent],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css'
})
export class DashboardPageComponent {

}
