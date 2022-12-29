import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './guards/authentication.guard';

const routes: Routes = [
  {
    path:'welcome',
    loadChildren: ()=> import('./pages/welcome/welcome.module').then((module)=> module.WelcomeModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path:'unicorns',
    loadChildren: ()=> import('./pages/unicorns/unicorns.module').then((module)=> module.UnicornsModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path:'login',
    loadChildren: ()=> import('./pages/login/login.module').then((module)=> module.LoginModule),
    
  },
  {path: '',redirectTo:'welcome',pathMatch:'full'},
  {path: '**',redirectTo:'login'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
