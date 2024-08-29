import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { InputFilesComponent } from '../input-files/input-files.component';
import { CurrencyFormat } from '../../../../../../shared/directives/currency-format.directive';

@Component({
  selector: 'app-collector-form',
  standalone: true,
  imports: [MatFormFieldModule,InputFilesComponent,CurrencyFormat],
  templateUrl: './collector-form.component.html',
  styleUrl: './collector-form.component.css'
})
export class CollectorFormComponent {

}
