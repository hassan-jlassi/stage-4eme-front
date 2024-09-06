import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Composant } from '../_models/composant'; // Assurez-vous que le chemin est correct

@Injectable({
  providedIn: 'root'
})
export class ComposantService {

  private baseUrl: string = 'http://localhost:8081/composants/';

  constructor(private http: HttpClient) { }

  getAllComposants(): Observable<Composant[]> {
    return this.http.get<Composant[]>(this.baseUrl);
  }

  getComposantById(id: number): Observable<Composant> {
    return this.http.get<Composant>(`${this.baseUrl}${id}`);
  }

  createComposant(composant: Composant): Observable<Composant> {
    return this.http.post<Composant>(this.baseUrl, composant);
  }

  updateComposant(updatedComposant: Composant, id: number): Observable<Composant> {
    return this.http.put<Composant>(`${this.baseUrl}${id}`, updatedComposant);
  }

  deleteComposant(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}${id}`);
  }
}
