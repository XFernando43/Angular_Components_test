import { Component } from '@angular/core';
import { CollectorFormComponent } from '../../components/collector-form/collector-form.component';

@Component({
  selector: 'app-form-page',
  standalone: true,
  imports: [CollectorFormComponent],
  templateUrl: './form-page.component.html',
  styleUrl: './form-page.component.css'
})
export class FormPageComponent {

}
