import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stock } from '../../_models/stock'; // Assurez-vous que le chemin vers le modèle Stock est correct
import { StockService } from '../../_services/stock.service'; // Assurez-vous que le chemin vers le service Stock est correct

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {
  stocks: Stock[] = [];
  stockCount: number = 0; // Variable pour stocker le nombre de stocks

  constructor(private stockService: StockService, private router: Router) { }

  ngOnInit(): void {
    this.loadStocks();
  }

  loadStocks() {
    this.stockService.getAllStocks().subscribe(
      stocks => {
        this.stocks = stocks;
        this.stockCount = this.stocks.length; // Mise à jour du nombre de stocks
      },
      error => {
        console.error('Error loading stocks:', error);
      }
    );
  }

  viewStock(stock: Stock) {
    console.log('View Stock:', stock);
  }

  deleteStock(id: number) {
    if (confirm('Are you sure you want to delete this stock?')) {
      this.stockService.deleteStock(id).subscribe(
        () => {
          this.stocks = this.stocks.filter(stock => stock.idProduit !== id);
          this.stockCount = this.stocks.length; // Mise à jour du nombre de stocks après suppression
        },
        error => {
          console.error('Error deleting stock:', error);
        }
      );
    }
  }

  createStock(newStock: Stock) {
    this.stockService.createStock(newStock).subscribe(
      createdStock => {
        this.stocks.push(createdStock);
        this.stockCount = this.stocks.length; // Mise à jour du nombre de stocks après création
      },
      error => {
        console.error('Error creating stock:', error);
      }
    );
  }

  editStock(stock: Stock) {
    this.router.navigate(['/update-stock', stock.idProduit]); // Ajustez l'URL en fonction de votre configuration de routage
  }
}
