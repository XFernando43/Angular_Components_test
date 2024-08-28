import { Routes } from '@angular/router';
import { LoginPageComponent } from './collectors/pages/login-page/login-page.component';
import { FormPageComponent } from './collectors/pages/form-page/form-page.component';
import { DashboardPageComponent } from './collectors/pages/dashboard-page/dashboard-page.component';
import { NotFoundPageComponent } from './public/pages/not-found-page/not-found-page.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {path:'login', component:LoginPageComponent},
    {path:'dashboard',component:DashboardPageComponent},
    {path:'form',component:FormPageComponent},
    {path:'**', component:NotFoundPageComponent}
];
