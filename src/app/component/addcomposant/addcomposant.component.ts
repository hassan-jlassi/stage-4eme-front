import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ComposantService } from '../../_services/composant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcomposant',
  templateUrl: './addcomposant.component.html',
  styleUrls: ['./addcomposant.component.scss']
})
export class AddcomposantComponent implements OnInit {
  addComposantForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private composantService: ComposantService,
    private router: Router
  ) {
    this.addComposantForm = this.fb.group({
      nomC: ['', [Validators.required, Validators.minLength(3)]],
      quantite: ['', [Validators.required, Validators.min(1)]],
    });
  }

  ngOnInit(): void {}

  addComposant() {
    if (this.addComposantForm.valid) {
      this.composantService.createComposant(this.addComposantForm.value).subscribe(
        createdComposant => {
          console.log('Composant ajouté avec succès :', createdComposant);
          this.addComposantForm.reset();
          this.router.navigate(['/component/composant']); // Adjust the route if needed
        },
        error => {
          console.error('Erreur lors de l\'ajout du composant :', error);
        }
      );
    } else {
      console.error('Données de formulaire invalides');
    }
  }

  reset() {
    this.addComposantForm.reset();
  }
}
