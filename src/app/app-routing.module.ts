import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AlertComponent } from './components/alert/alert.component';
const routes: Routes = [

  { path: 'home', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: UserProfileComponent },
  { path: 'register', component: SignUpComponent },
  { path: 'alert', component: AlertComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
