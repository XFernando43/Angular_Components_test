import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
//

import { LoginFormComponent } from '../../components/login-form/login-form.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule,MatInputModule,LoginFormComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

}
