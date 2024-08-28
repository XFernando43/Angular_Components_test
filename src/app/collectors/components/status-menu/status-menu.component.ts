import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
interface MenuItem {
  label: string;
  icon: string;
  count: number;
  active: boolean;
}


@Component({
  selector: 'app-status-menu',
  standalone: true,
  imports: [CommonModule,MatIconModule],
  templateUrl: './status-menu.component.html',
  styleUrl: './status-menu.component.css'
})
export class StatusMenuComponent {
  menuItems: MenuItem[] = [
    { label: 'Atrasados', icon: 'apps', count: 10, active: true },
    { label: 'Pendientes', icon: 'apps', count: 5, active: false },
    { label: 'Con Mora', icon: 'apps', count: 2, active: false },
    { label: 'Graves', icon: 'apps', count: 8, active: false },
  ];

  selectMenuItem(selectedItem: MenuItem): void {
    this.menuItems.forEach(item => {
      item.active = item === selectedItem;
    });
  }
}
