import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ComposantService } from "../../_services/composant.service";
import { Composant } from "../../_models/composant";

// Validation personnalisée pour vérifier si la quantité est positive
function quantityValidator(control: FormControl): { [key: string]: boolean } | null {
  const quantity = control.value;
  if (quantity <= 0) {
    return { invalidQuantity: true };
  }
  return null;
}

@Component({
  selector: 'app-updatecomposant',
  templateUrl: './updatecomposant.component.html',
  styleUrls: ['./updatecomposant.component.scss']
})
export class UpdatecomposantComponent implements OnInit {
  idComposant!: number;
  composant!: Composant;
  composantForm!: FormGroup;

  constructor(private composantService: ComposantService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // Récupérer l'ID du composant à partir de l'URL
    this.idComposant = this.route.snapshot.params['id'];
    console.log('ID du composant récupéré de l\'URL :', this.idComposant);

    // Initialiser le formulaire et charger les données du composant
    this.initForm();
    this.loadComposant();
  }

  initForm() {
    this.composantForm = new FormGroup({
      nomC: new FormControl('', [Validators.required, Validators.minLength(3)]),
      quantite: new FormControl('', [Validators.required, quantityValidator]),
    });
  }

  loadComposant() {
    this.composantService.getComposantById(this.idComposant).subscribe(
      composant => {
        this.composant = composant;
        this.composantForm.patchValue({
          nomC: composant.nomC,
          quantite: composant.quantite
        });
      },
      error => {
        console.error('Error loading composant:', error);
      }
    );
  }

  updateComposant() {
    if (this.composantForm.valid) {
      const updatedComposant: Composant = {
        idComposant: this.idComposant,
        ...this.composantForm.value
      };

      this.composantService.updateComposant(updatedComposant, this.idComposant).subscribe(
        () => {
          console.log('Composant updated successfully');
          this.router.navigate(['/component/composant']);
        },
        error => {
          console.error('Error updating composant:', error);
        }
      );
    } else {
      console.error('Form is invalid');
    }
  }
}
