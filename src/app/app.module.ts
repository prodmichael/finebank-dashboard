import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsService } from './services/icons.service';
import { AuthComponent } from './module/auth/auth.component';

@NgModule({
  declarations: [AppComponent, AuthComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [IconsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
