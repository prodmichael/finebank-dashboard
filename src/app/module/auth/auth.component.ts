import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/module/auth/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {
    const potentialToken = localStorage.getItem('auth-token');

    if (potentialToken !== null) {
      this.authService.setToken(potentialToken);
    }
  }
}
