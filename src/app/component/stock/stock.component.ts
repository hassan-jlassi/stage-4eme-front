import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stock } from '../../_models/stock'; // Ensure the path to the Stock model is correct
import { StockService } from '../../_services/stock.service'; // Ensure the path to the Stock service is correct

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {
  stocks: Stock[] = [];

  constructor(private stockService: StockService, private router: Router) { }

  ngOnInit(): void {
    this.loadStocks();
  }

  loadStocks() {
    this.stockService.getAllStocks().subscribe(
      stocks => {
        this.stocks = stocks;
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
      },
      error => {
        console.error('Error creating stock:', error);
      }
    );
  }

  editStock(stock: Stock) {
    this.router.navigate(['/update-stock', stock.idProduit]); // Adjust the URL based on your routing setup
  }
}
