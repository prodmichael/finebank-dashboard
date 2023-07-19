import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthComponent } from './module/auth/auth.component';
import { AuthModule } from './module/auth/auth.module';
import { IconsService } from './services/icons.service';

@NgModule({
  declarations: [AppComponent, AuthComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AuthModule,
  ],
  providers: [IconsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
