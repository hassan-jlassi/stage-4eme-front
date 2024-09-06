import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VenteService } from '../../_services/vente.service'; // Assurez-vous que le chemin est correct
import { ActivatedRoute, Router } from '@angular/router';
import { Vente } from '../../_models/vente'; // Assurez-vous que le chemin est correct

@Component({
  selector: 'app-updatevente',
  templateUrl: './updatevente.component.html',
  styleUrls: ['./updatevente.component.scss']
})
export class UpdateventeComponent implements OnInit {
  updateVenteForm: FormGroup;
  venteId!: number;

  constructor(
    private fb: FormBuilder,
    private venteService: VenteService, // Assurez-vous que le chemin est correct
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.updateVenteForm = this.fb.group({
      dateVente: ['', Validators.required],
      montantTotal: ['', [Validators.required, Validators.min(0)]],
      produit: ['', Validators.required],
      client: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.venteId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadVente();
  }

  loadVente() {
    this.venteService.getVenteById(this.venteId).subscribe(
      vente => {
        this.updateVenteForm.patchValue(vente);
      },
      error => {
        console.error('Erreur lors du chargement de la vente :', error);
      }
    );
  }

  updateVente() {
    if (this.updateVenteForm.valid) {
      this.venteService.updateVente(this.updateVenteForm.value, this.venteId).subscribe(
        updatedVente => {
          console.log('Vente mise à jour avec succès :', updatedVente);
          this.router.navigate(['/component/vente']); // Ajustez le chemin si nécessaire
        },
        error => {
          console.error('Erreur lors de la mise à jour de la vente :', error);
        }
      );
    } else {
      console.error('Données de formulaire invalides');
    }
  }

  reset() {
    this.updateVenteForm.reset();
  }
}
