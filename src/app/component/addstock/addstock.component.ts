import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StockService } from '../../_services/stock.service'; // Ensure the path is correct
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
    this.addStockForm = this.fb.group({
      numSerie: ['', [Validators.required, Validators.minLength(3)]],
      IMEI: ['', [Validators.required, Validators.pattern('^[0-9]{15}$')]], // Example for 15 digits IMEI
      dateProduction: ['', Validators.required],
      categorie: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  addStock() {
    if (this.addStockForm.valid) {
      this.stockService.createStock(this.addStockForm.value).subscribe(
        createdStock => {
          console.log('Stock ajouté avec succès :', createdStock);
          this.addStockForm.reset();
          this.router.navigate(['/component/stock']); // Adjust the route if needed
        },
        error => {
          console.error('Erreur lors de l\'ajout du stock :', error);
        }
      );
    } else {
      console.error('Données de formulaire invalides');
    }
  }

  reset() {
    this.addStockForm.reset();
  }
}
