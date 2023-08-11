import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../../interfaces/auth.interfaces';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(
    public authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  form!: FormGroup;
  passwordVisible: boolean = false;
  submitted = false;
  message!: string;
  aSub!: Subscription;

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      if (params['registered']) {
        this.message = 'You can log in';
      } else if (params['accessDenied']) {
        this.message = 'To get started, log in';
      } else if (params['sessionFailed']) {
        this.message = 'Please log in';
      }
    });

    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  ngOnDestroy() {
    if (this.aSub) {
      this.aSub.unsubscribe();
    }
  }

  submit() {
    this.submitted = true;
    if (this.form.valid) {
      const formData = { ...this.form.value };
      console.log(formData);
      // this.form.reset();
    }
    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password,
    };

    this.aSub = this.authService.login(user).subscribe(
      () => {
        this.form.reset();
        this.router.navigate(['platform', 'overview']);
        this.submitted = false;
      },
      () => {
        this.submitted = false;
      }
    );
  }
}
