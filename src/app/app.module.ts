import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './module/auth/pages/login/login.component';
import { SignupComponent } from './module/auth/pages/signup/signup.component';
import { ForgotPasswordComponent } from './module/auth/pages/components/forgot-password/forgot-password.component';
import { PlatformComponent } from './platform/platform.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, SignupComponent, ForgotPasswordComponent, PlatformComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
