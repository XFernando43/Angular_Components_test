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
    { label: 'Inbox', icon: 'apps', count: 10, active: true },
    { label: 'Starred', icon: 'apps', count: 5, active: false },
    { label: 'Spam', icon: 'apps', count: 2, active: false },
    { label: 'Important', icon: 'apps', count: 8, active: false },
    { label: 'Sent', icon: 'apps', count: 7, active: false }
  ];

  selectMenuItem(selectedItem: MenuItem): void {
    this.menuItems.forEach(item => {
      item.active = item === selectedItem;
    });
  }
}
