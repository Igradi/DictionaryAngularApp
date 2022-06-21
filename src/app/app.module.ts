import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { JwtModule } from '@auth0/angular-jwt';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UserService } from './shared/user.service';
import { MainComponent } from './components/main/main.component';
import { RandomWordService } from "./shared/random-word.service";
import { WordDefinitionService } from "./shared/word-definition.service";
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AlertComponent } from './components/alert/alert.component';
import { SearchComponent } from './components/search/search.component';
import { AddWordToDbService } from './shared/add-word-to-db.service';
import { StatsComponent } from './components/stats/stats.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { AdminAlertComponent } from './components/admin-alert/admin-alert.component';
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { InterceptorService } from './shared/interceptor.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';




export function tokenGetter() {
  return localStorage.getItem("jwt");
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    UserProfileComponent,
    AlertComponent,
    SearchComponent,
    StatsComponent,
    AdminPageComponent,
    AdminAlertComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    ToastrModule.forRoot(),
    NgCircleProgressModule.forRoot({
      "radius": 100,
      "outerStrokeWidth": 16,
      "innerStrokeWidth": 8,
      "outerStrokeColor": "#78C000",
      "innerStrokeColor": "#C7E596",
      "animationDuration": 700,
      "backgroundColor": "#ffffff",
      "titleFontSize": "30",
      "unitsFontSize": "15",
      "subtitleFontSize": "20"
    }),

    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["https://localhost:7153"],
        disallowedRoutes: []
      }
    })


  ],
  providers: [RandomWordService, UserService, WordDefinitionService, AddWordToDbService, { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
