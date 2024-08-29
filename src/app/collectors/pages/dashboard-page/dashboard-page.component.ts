import { Component } from '@angular/core';
import { InfoSectionComponent } from '../../components/info-section/info-section.component'; 
import { SidebarComponent } from '../../../shared/components/sidebar/sidebar.component';
import { CollectorDataTableComponent } from '../../components/collector-data-table/collector-data-table.component';
@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [CollectorDataTableComponent, SidebarComponent,InfoSectionComponent],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css'
})
export class DashboardPageComponent {

}
