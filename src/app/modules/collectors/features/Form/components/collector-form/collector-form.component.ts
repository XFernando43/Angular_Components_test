import { ChangeDetectionStrategy ,Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { InputFilesComponent } from '../input-files/input-files.component';
import { CurrencyFormat } from '../../../../../../shared/directives/currency-format.directive';

// import {ChangeDetectionStrategy, Component} from '@angular/core';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
// import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


@Component({
  selector: 'app-collector-form',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatFormFieldModule,InputFilesComponent,CurrencyFormat,MatInputModule, MatDatepickerModule],
  templateUrl: './collector-form.component.html',
  styleUrl: './collector-form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CollectorFormComponent {
  readonly startDate = new Date(1990, 0, 1);
}
