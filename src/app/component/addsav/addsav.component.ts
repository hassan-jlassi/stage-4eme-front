import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SavService } from '../../_services/sav.service'; // Update with the correct path
import { Router } from '@angular/router';

@Component({
  selector: 'app-addsav',
  templateUrl: './addsav.component.html',
  styleUrls: ['./addsav.component.scss']
})
export class AddsavComponent implements OnInit {
  addSavForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private savService: SavService, // Update with the correct service
    private router: Router
  ) {
    this.addSavForm = this.fb.group({
      numSerie: ['', [Validators.required, Validators.minLength(3)]],
      imei: ['', [Validators.required, Validators.pattern('^[0-9]{15}$')]], // Example for 15 digits IMEI
      dateReception: ['', Validators.required],
      categorie: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  addSav() {
    if (this.addSavForm.valid) {
      this.savService.createSav(this.addSavForm.value).subscribe(
        createdSav => {
          console.log('SAV ajouté avec succès :', createdSav);
          this.addSavForm.reset();
          this.router.navigate(['/component/sav']); // Adjust the route if needed
        },
        error => {
          console.error('Erreur lors de l\'ajout du SAV :', error);
        }
      );
    } else {
      console.error('Données de formulaire invalides');
    }
  }

  reset() {
    this.addSavForm.reset();
  }
}
