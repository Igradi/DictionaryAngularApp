import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AlertComponent } from './components/alert/alert.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { SearchComponent } from './components/search/search.component';
import { StatsComponent } from './components/stats/stats.component';
import { RoleGuardService } from './guards/role-guard.service';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { AdminAlertComponent } from './components/admin-alert/admin-alert.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ResetPasswordFormComponent } from './components/reset-password-form/reset-password-form.component';
import { WordsRankedListComponent } from './components/words-ranked-list/words-ranked-list.component';


const routes: Routes = [

  { path: 'home', component: MainComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: UserProfileComponent, canActivate: [AuthGuardService] },
  { path: 'register', component: SignUpComponent },
  { path: 'alert', component: AlertComponent },
  { path: 'search', component: SearchComponent, canActivate: [AuthGuardService] },
  { path: 'stats', component: StatsComponent, canActivate: [AuthGuardService] },
  { path: 'admin', component: AdminPageComponent, canActivate: [RoleGuardService] },
  { path: 'admin-alert', component: AdminAlertComponent },
  { path: 'forgot-password', component: ResetPasswordComponent },
  { path: 'forgot-password-form', component: ResetPasswordFormComponent },
  { path: 'words-ranked-list', component: WordsRankedListComponent, canActivate: [RoleGuardService] },
  { path: '', component: LoginComponent },
  { path: '**', component: MainComponent, canActivate: [AuthGuardService] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
