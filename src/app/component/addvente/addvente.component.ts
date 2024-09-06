import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VenteService } from '../../_services/vente.service'; // Assurez-vous que le chemin est correct
import { Router } from '@angular/router';

@Component({
  selector: 'app-addvente',
  templateUrl: './addvente.component.html',
  styleUrls: ['./addvente.component.scss']
})
export class AddventeComponent implements OnInit {
  addVenteForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private venteService: VenteService, // Assurez-vous que le chemin est correct
    private router: Router
  ) {
    this.addVenteForm = this.fb.group({
      dateVente: ['', Validators.required],
      montantTotal: ['', [Validators.required, Validators.min(0)]],
      produit: ['', Validators.required],
      client: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  addVente() {
    if (this.addVenteForm.valid) {
      this.venteService.createVente(this.addVenteForm.value).subscribe(
        createdVente => {
          console.log('Vente ajoutée avec succès :', createdVente);
          this.addVenteForm.reset();
          this.router.navigate(['/component/vente']); // Ajustez le chemin si nécessaire
        },
        error => {
          console.error('Erreur lors de l\'ajout de la vente :', error);
        }
      );
    } else {
      console.error('Données de formulaire invalides');
    }
  }

  reset() {
    this.addVenteForm.reset();
  }
}
