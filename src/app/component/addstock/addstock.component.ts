import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StockService } from '../../_services/stock.service'; // Assurez-vous que le chemin est correct
import { Router } from '@angular/router';

@Component({
  selector: 'app-addstock',
  templateUrl: './addstock.component.html',
  styleUrls: ['./addstock.component.scss']
})
export class AddstockComponent implements OnInit {
  addStockForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private stockService: StockService,
    private router: Router
  ) {
    // Définition du formulaire avec des validations
    this.addStockForm = this.fb.group({
      numSerie: ['', [Validators.required, Validators.minLength(3)]],
      imei: ['', [Validators.required, Validators.pattern('^[0-9]{15}$')]], // Validation de 15 chiffres pour l'IMEI
      dateProduction: ['', Validators.required],
      categorie: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  // Méthode pour ajouter un stock
  addStock() {
    if (this.addStockForm.valid) {
      console.log('Formulaire valide', this.addStockForm.value); // Affichage du contenu du formulaire dans la console

      this.stockService.createStock(this.addStockForm.value).subscribe(
        createdStock => {
          console.log('Stock ajouté avec succès :', createdStock);
          this.addStockForm.reset(); // Réinitialiser le formulaire
          this.router.navigate(['/component/stock']); // Rediriger vers la page des stocks
        },
        error => {
          console.error('Erreur lors de l\'ajout du stock :', error); // Afficher l'erreur si l'ajout échoue
        }
      );
    } else {
      console.error('Données de formulaire invalides');
      console.log(this.addStockForm.errors);  // Afficher les erreurs pour savoir quel champ est invalide
    }
  }

  reset() {
    this.addStockForm.reset(); // Réinitialiser le formulaire
  }
}
