import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AppSpacingModule } from '../shared/ui-kit/spacing/app-spacing.module';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ButtonModule } from '../shared/ui-kit/button/button.module';

@NgModule({
  declarations: [AuthComponent, LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatIconModule,
    AppSpacingModule,
    MatInputModule,
    ButtonModule,
  ],
})
export class AuthModule {}
