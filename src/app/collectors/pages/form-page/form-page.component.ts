import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { CollectorFormComponent } from '../../components/collector-form/collector-form.component';

@Component({
  selector: 'app-form-page',
  standalone: true,
  imports: [MatButtonModule,MatIconModule,MatDividerModule,CollectorFormComponent],
  templateUrl: './form-page.component.html',
  styleUrl: './form-page.component.css'
})
export class FormPageComponent {

}
