import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-message-status-button',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './message-status-button.component.html',
  styleUrl: './message-status-button.component.css'
})
export class MessageStatusButtonComponent {
  public active:boolean;
  public style:string;
  constructor(){
    this.style = '';
    this.active = false;
  }

  

}
