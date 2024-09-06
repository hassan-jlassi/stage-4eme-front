import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vente } from '../_models/vente'; // Assurez-vous que le chemin est correct

@Injectable({
  providedIn: 'root'
})
export class VenteService {

  private baseUrl: string = 'http://localhost:8081/api/ventes/';

  constructor(private http: HttpClient) { }

  getAllVentes(): Observable<Vente[]> {
    return this.http.get<Vente[]>(this.baseUrl);
  }

  getVenteById(id: number): Observable<Vente> {
    return this.http.get<Vente>(`${this.baseUrl}${id}`);
  }

  createVente(vente: Vente): Observable<Vente> {
    return this.http.post<Vente>(this.baseUrl, vente);
  }

  updateVente(updatedVente: Vente, id: number): Observable<Vente> {
    return this.http.put<Vente>(`${this.baseUrl}${id}`, updatedVente);
  }

  deleteVente(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}${id}`);
  }
}
