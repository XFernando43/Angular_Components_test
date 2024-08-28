import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { StatusMenuComponent } from '../status-menu/status-menu.component';
import {MatIconModule} from '@angular/material/icon';
import { CollectorDataTableComponent } from '../collector-data-table/collector-data-table.component';
export interface PeriodicElement {
  nombre: string;
  apellido: string;
  nroSolicitud: number;
  docIdentidad: string;
  status: string;
  fechaCobranza: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    nroSolicitud: 1,
    nombre: 'Juan',
    apellido: 'Pérez',
    docIdentidad: '12345678A',
    status: 'Pendiente',
    fechaCobranza: '2024-08-15',
  },
  {
    nroSolicitud: 2,
    nombre: 'Ana',
    apellido: 'López',
    docIdentidad: '87654321B',
    status: 'Pagado',
    fechaCobranza: '2024-07-22',
  },
  {
    nroSolicitud: 3,
    nombre: 'Carlos',
    apellido: 'García',
    docIdentidad: '11223344C',
    status: 'Pendiente',
    fechaCobranza: '2024-09-01',
  },
  {
    nroSolicitud: 4,
    nombre: 'Carlos',
    apellido: 'García',
    docIdentidad: '11223344C',
    status: 'Pendiente',
    fechaCobranza: '2024-09-01',
  },
  {
    nroSolicitud: 5,
    nombre: 'Carlos',
    apellido: 'García',
    docIdentidad: '11223344C',
    status: 'Pendiente',
    fechaCobranza: '2024-09-01',
  },
  {
    nroSolicitud: 6,
    nombre: 'Carlos',
    apellido: 'García',
    docIdentidad: '11223344C',
    status: 'Pendiente',
    fechaCobranza: '2024-09-01',
  },
  {
    nroSolicitud: 3,
    nombre: 'Carlos',
    apellido: 'García',
    docIdentidad: '11223344C',
    status: 'Pagado',
    fechaCobranza: '2024-09-01',
  },
  {
    nroSolicitud: 3,
    nombre: 'Carlos',
    apellido: 'García',
    docIdentidad: '11223344C',
    status: 'Pagado',
    fechaCobranza: '2024-09-01',
  },
  {
    nroSolicitud: 3,
    nombre: 'Carlos',
    apellido: 'García',
    docIdentidad: '11223344C',
    status: 'Pagado',
    fechaCobranza: '2024-09-01',
  },
  {
    nroSolicitud: 3,
    nombre: 'Carlos',
    apellido: 'García',
    docIdentidad: '11223344C',
    status: 'Pagado',
    fechaCobranza: '2024-09-01',
  },
  {
    nroSolicitud: 3,
    nombre: 'Carlos',
    apellido: 'García',
    docIdentidad: '11223344C',
    status: 'Pagado',
    fechaCobranza: '2024-09-01',
  },
  {
    nroSolicitud: 3,
    nombre: 'Carlos',
    apellido: 'García',
    docIdentidad: '11223344C',
    status: 'Pagado',
    fechaCobranza: '2024-09-01',
  },
  {
    nroSolicitud: 3,
    nombre: 'Carlos',
    apellido: 'García',
    docIdentidad: '11223344C',
    status: 'Pagado',
    fechaCobranza: '2024-09-01',
  },
  {
    nroSolicitud: 3,
    nombre: 'Carlos',
    apellido: 'García',
    docIdentidad: '11223344C',
    status: 'Pagado',
    fechaCobranza: '2024-09-01',
  },
  {
    nroSolicitud: 3,
    nombre: 'Carlos',
    apellido: 'García',
    docIdentidad: '11223344C',
    status: 'Pagado',
    fechaCobranza: '2024-09-01',
  },
  {
    nroSolicitud: 3,
    nombre: 'Carlos',
    apellido: 'García',
    docIdentidad: '11223344C',
    status: 'Pagado',
    fechaCobranza: '2024-09-01',
  },
  {
    nroSolicitud: 3,
    nombre: 'Carlos',
    apellido: 'García',
    docIdentidad: '11223344C',
    status: 'Pagado',
    fechaCobranza: '2024-09-01',
  },
  {
    nroSolicitud: 3,
    nombre: 'Carlos',
    apellido: 'García',
    docIdentidad: '11223344C',
    status: 'Pagado',
    fechaCobranza: '2024-09-01',
  },
  {
    nroSolicitud: 3,
    nombre: 'Carlos',
    apellido: 'García',
    docIdentidad: '11223344C',
    status: 'Pendiente',
    fechaCobranza: '2024-09-01',
  },
  {
    nroSolicitud: 3,
    nombre: 'Carlos',
    apellido: 'García',
    docIdentidad: '11223344C',
    status: 'Pendiente',
    fechaCobranza: '2024-09-01',
  },
  {
    nroSolicitud: 3,
    nombre: 'Carlos',
    apellido: 'García',
    docIdentidad: '11223344C',
    status: 'Pendiente',
    fechaCobranza: '2024-09-01',
  },
  {
    nroSolicitud: 3,
    nombre: 'Carlos',
    apellido: 'García',
    docIdentidad: '11223344C',
    status: 'Pendiente',
    fechaCobranza: '2024-09-01',
  },
  {
    nroSolicitud: 3,
    nombre: 'Carlos',
    apellido: 'García',
    docIdentidad: '11223344C',
    status: 'Pendiente',
    fechaCobranza: '2024-09-01',
  },
  {
    nroSolicitud: 3,
    nombre: 'Carlos',
    apellido: 'García',
    docIdentidad: '11223344C',
    status: 'Pendiente',
    fechaCobranza: '2024-09-01',
  },
  {
    nroSolicitud: 3,
    nombre: 'Carlos',
    apellido: 'García',
    docIdentidad: '11223344C',
    status: 'Pendiente',
    fechaCobranza: '2024-09-01',
  },
  {
    nroSolicitud: 3,
    nombre: 'Carlos',
    apellido: 'García',
    docIdentidad: '11223344C',
    status: 'Pendiente',
    fechaCobranza: '2024-09-01',
  },
];







@Component({
  selector: 'app-info-section',
  standalone: true,
  imports: [StatusMenuComponent,MatIconModule,CollectorDataTableComponent],
  templateUrl: './info-section.component.html',
  styleUrl: './info-section.component.css'
})
export class InfoSectionComponent {
  displayedColumns: string[] = ['nroSolicitud','Nombre','Doc. identidad','Status','Fecha de Cobranza','acciones',];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
   
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private router: Router) {}
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  navigateTo(route: string) {
    this.router.navigate([`/${route}`]);
  }
}
