import { Injectable } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

@Injectable()
export class AuthService {
  constructor(private afAuth: AngularFireAuthModule) {}

  // registerUser(email: string, password: string) {
  //   return this.afAuth.createUserWithEmailAndPassword(email, password);
  // }
}
