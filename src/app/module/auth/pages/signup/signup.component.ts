import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { newUser } from '../../interfaces/auth.interfaces';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  submitted = false;
  aSub!: Subscription;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
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
    }

    const user: newUser = {
      name: this.form.value.name,
      email: this.form.value.email,
      password: this.form.value.password,
    };

    this.aSub = this.authService.register(user).subscribe(() => {
      this.form.reset();
      this.router.navigate(['platform', 'overview']);
      this.submitted = false;
    });
  }
}
