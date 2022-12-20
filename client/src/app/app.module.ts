import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RecaptchaModule } from "ng-recaptcha";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';
import { SiteLayoutComponent } from './shared/layouts/site-layout/site-layout.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { TokenInterceptor } from './shared/classes/token.interceptor';
import { ContextPageComponent } from './context-page/context-page.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    AuthLayoutComponent,
    SiteLayoutComponent,
    RegistrationPageComponent,
    ContextPageComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RecaptchaModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: TokenInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
