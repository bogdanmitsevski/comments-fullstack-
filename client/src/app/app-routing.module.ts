import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContextPageComponent } from './context-page/context-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { AuthGuard } from './shared/classes/auth.guard';
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';
import { SiteLayoutComponent } from './shared/layouts/site-layout/site-layout.component';

const routes: Routes = [
  {path: '', component: AuthLayoutComponent, children: [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginPageComponent},
    {path: 'registration', component: RegistrationPageComponent},
    {path: 'logout', component: LoginPageComponent}
  ]},

  {path: '', component: SiteLayoutComponent, children: [
    {path: 'comments', component: ContextPageComponent}
  ]},
{
  path: '', component: SiteLayoutComponent, canActivate: [AuthGuard], children: [

  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 