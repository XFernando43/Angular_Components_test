import { Routes } from '@angular/router';

import { NotFoundPageComponent } from './shared/pages/not-found-page/not-found-page.component';
import { LoginPageComponent } from './modules/auth/features/sign-in/pages/login-page/login-page.component';
import { DashboardPageComponent } from './modules/collectors/features/DataTable/pages/dashboard-page/dashboard-page.component';
import { FormPageComponent } from './modules/collectors/features/Form/pages/form-page/form-page.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {path:'login', component:LoginPageComponent},
    {path:'dashboard',component:DashboardPageComponent},
    {path:'form',component:FormPageComponent},
    {path:'**', component:NotFoundPageComponent}
];
