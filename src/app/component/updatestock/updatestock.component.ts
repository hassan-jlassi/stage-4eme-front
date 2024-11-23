import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StockService } from '../../_services/stock.service';
import { Stock } from '../../_models/stock';

@Component({
  selector: 'app-updatestock',
  templateUrl: './updatestock.component.html',
  styleUrls: ['./updatestock.component.scss']
})
export class UpdatestockComponent implements OnInit {
  updateStockForm: FormGroup;
  stockId!: number;

  constructor(
    private fb: FormBuilder,
    private stockService: StockService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.updateStockForm = this.fb.group({
      numSerie: ['', [Validators.required, Validators.minLength(3)]],
      imei: ['', [Validators.required, Validators.pattern('^[0-9]{15}$')]],
      dateProduction: ['', Validators.required],
      categorie: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.stockId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadStock();
  }

  loadStock() {
    this.stockService.getStockById(this.stockId).subscribe(
      stock => {
        this.updateStockForm.patchValue(stock);
      },
      error => {
        console.error('Error loading stock:', error);
      }
    );
  }

  updateStock() {
    if (this.updateStockForm.valid) {
      const updatedStock: Stock = {
        ...this.updateStockForm.value,
        idProduit: this.stockId
      };
      this.stockService.updateStock(updatedStock, this.stockId).subscribe(
        () => {
          console.log('Stock updated successfully');
          this.router.navigate(['/component/stock']); // Redirect to the stocks list
        },
        error => {
          console.error('Error updating stock:', error);
        }
      );
    } else {
      console.error('Invalid form data');
    }
  }

  reset() {
    this.updateStockForm.reset();
  }
}
