import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { StatusMenuComponent } from '../status-menu/status-menu.component';
import { TagComponent } from '../../../../../../shared/components/tag/tag.component';
import { debtors } from '../../interfaces/dbtors.interface';
import { DebtorsService } from '../../data/service/table.service';
import { SearchButtonComponent } from '../search-button/search-button.component';

@Component({
  selector: 'app-collector-data-table',
  standalone: true,
  imports: [MatIconModule, CommonModule, MatTableModule, MatPaginator, TagComponent, StatusMenuComponent, SearchButtonComponent],
  templateUrl: './collector-data-table.component.html',
  styleUrls: ['./collector-data-table.component.css']
})
export class CollectorDataTableComponent {
  flag: boolean = true;
  displayedColumns: string[] = ['nroSolicitud', 'Nombre', 'Doc. identidad', 'Status', 'Fecha de Cobranza', 'acciones'];
  dataSource = new MatTableDataSource<debtors>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private router: Router, private service: DebtorsService) {}

  ngOnInit(): void {
    this.loadDebtors();
  }

  orderByid() {
    this.flag = !this.flag;
    this.dataSource.data = this.service.orderByid(this.dataSource.data, this.flag);
  }

  orderByName() {
    this.flag = !this.flag;
    this.dataSource.data = this.service.orderByName(this.dataSource.data, this.flag);
  }
  
  orderByDoc() {
    this.flag = !this.flag;
    this.dataSource.data = this.service.orderByDoc(this.dataSource.data, this.flag);
  }

  orderByStatus() {
    this.flag = !this.flag;
    this.dataSource.data = this.service.orderByStatus(this.dataSource.data, this.flag);
  }

  orderByDate() {
    this.flag = !this.flag;
    this.dataSource.data = this.service.orderByDate(this.dataSource.data, this.flag);
  }


  loadDebtors() {
    this.service.getComputedDebtors().subscribe({
      next: (debtorsList) => {
        this.dataSource.data = debtorsList;
      },
      error: (error) => {
        console.error('Error loading debtors:', error);
      }
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  navigateTo(route: string) {
    this.router.navigate([`/${route}`]);
  }
}
