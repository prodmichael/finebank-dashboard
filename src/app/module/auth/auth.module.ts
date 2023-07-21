import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AuthContentModule } from '../shared/ui-kit/auth-content/auth-content.module';
import { ButtonModule } from '../shared/ui-kit/button/button.module';
import { CheckboxModule } from '../shared/ui-kit/checkbox/checkbox.module';
import { AppSpacingModule } from '../shared/ui-kit/spacing/app-spacing.module';
import { AuthRoutingModule } from './auth-routing.module';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent, SignupComponent, ForgotPasswordComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatIconModule,
    AppSpacingModule,
    MatInputModule,
    ButtonModule,
    CheckboxModule,
    AuthContentModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AuthModule {}
