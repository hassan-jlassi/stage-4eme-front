import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      emailUser: ['', [Validators.required, Validators.email]],
      passwordUser: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { emailUser, passwordUser } = this.loginForm.value;
      this.authService.login(emailUser, passwordUser).subscribe({
        next: (response) => {
          console.log('Login successful', response);
          // Navigate to dashboard if login is successful
          this.router.navigate(['/dashboard']);
        },
        error: (err) => {
          console.error('Login failed', err);
          // Show an alert with the error message
          alert('Invalid email or password. Please try again.');
        }
      });
    }
  }

  navigateToRegistration(): void {
    this.router.navigate(['/inscription']); // Redirect to the registration page
  }
}
