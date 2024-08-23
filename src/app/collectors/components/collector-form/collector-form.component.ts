import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-collector-form',
  standalone: true,
  imports: [MatFormFieldModule],
  templateUrl: './collector-form.component.html',
  styleUrl: './collector-form.component.css'
})
export class CollectorFormComponent {

}
