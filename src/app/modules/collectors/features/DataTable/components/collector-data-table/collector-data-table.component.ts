import { Component, ViewChild } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { StatusMenuComponent } from '../status-menu/status-menu.component';
import { TagComponent } from '../../../../../../shared/components/tag/tag.component';
import { debtors } from '../../interfaces/dbtors.interface';
import { DebtorsService } from '../../data/service/table.service';


@Component({
  selector: 'app-collector-data-table',
  standalone: true,
  imports: [MatIconModule,CommonModule,MatTableModule,MatPaginator,TagComponent,StatusMenuComponent],
  templateUrl: './collector-data-table.component.html',
  styleUrl: './collector-data-table.component.css'
})
export class CollectorDataTableComponent {
  displayedColumns: string[] = ['nroSolicitud','Nombre','Doc. identidad','Status','Fecha de Cobranza','acciones',];
  dataSource = new MatTableDataSource<debtors>();
   
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private router: Router, private service:DebtorsService) {
  }

  ngOnInit(): void {
    this.loadDebtors();
  }

  async loadDebtors() {
    try {
      const debtorsList = await this.service.getDebtors();
      this.dataSource.data = debtorsList; 
    } catch (error) {
      console.error('Error loading debtors:', error);
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  navigateTo(route: string) {
    this.router.navigate([`/${route}`]);
  }
}
