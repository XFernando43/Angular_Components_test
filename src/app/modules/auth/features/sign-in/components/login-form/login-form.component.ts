import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  public fieldCompletes:boolean=false;

  public email:String='';
  public password:String='';

  constructor(private router: Router) {}
  navigateTo(route: string) {
    
    if(this.email == '' || this.password == '' || (this.password == '' && this.email == '')){
      this.fieldCompletes = true;
      stop;
    }
    
    if(this.fieldCompletes){
      this.router.navigate([`/${route}`]);
    }
  }
}
