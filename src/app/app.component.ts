import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/module/auth/services/auth.service';
import { IconsService } from './services/icons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private iconsService: IconsService
  ) {
    this.iconsService.initIcons();
  }

  ngOnInit() {
    const potentialToken = localStorage.getItem('auth-token');

    if (potentialToken != null) {
      this.authService.setToken(potentialToken);
    }
  }
}
