import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stock } from '../_models/stock'; // Assurez-vous que le chemin est correct

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private baseUrl: string = 'http://localhost:8081/api/stocks/';

  constructor(private http: HttpClient) { }

  getAllStocks(): Observable<Stock[]> {
    return this.http.get<Stock[]>(this.baseUrl);
  }

  getStockById(id: number): Observable<Stock> {
    return this.http.get<Stock>(`${this.baseUrl}${id}`);
  }

  createStock(stock: Stock): Observable<Stock> {
    return this.http.post<Stock>(this.baseUrl, stock);
  }

  updateStock(updatedStock: Stock, id: number): Observable<Stock> {
    return this.http.put<Stock>(`${this.baseUrl}${id}`, updatedStock);
  }

  deleteStock(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}${id}`);
  }
}
