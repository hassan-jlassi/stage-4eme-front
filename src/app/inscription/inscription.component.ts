import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../_services/user.service'; // Ensure the path is correct
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {
  inscriptionForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.inscriptionForm = this.fb.group({
      nomUser: ['', Validators.required],
      prenomUser: ['', Validators.required],
      emailUser: ['', [Validators.required, Validators.email]],
      passwordUser: ['', Validators.required],
      role: ['', Validators.required],
      departement: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.inscriptionForm.valid) {
      const newUser = this.inscriptionForm.value;
      this.userService.createUser(newUser).subscribe({
        next: (user) => {
          console.log('User created successfully', user);
          this.router.navigate(['/login']); // Redirect to a success page or login
        },
        error: (err) => {
          console.error('Error creating user', err);
        }
      });
    }
  }

  // Method to navigate to the login page
  navigateToLogin(): void {
    this.router.navigate(['/login']); // Replace with the actual route for your login page
  }
}
