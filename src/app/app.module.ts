import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environments';
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
    AngularFireModule.initializeApp(environment),
    AngularFireAuthModule,
  ],
  providers: [IconsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
