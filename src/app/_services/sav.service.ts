import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sav } from '../_models/sav'; // Assurez-vous que le chemin est correct

@Injectable({
  providedIn: 'root'
})
export class SavService {

  private baseUrl: string = 'http://localhost:8081/api/savs/';

  constructor(private http: HttpClient) { }

  getAllSavs(): Observable<Sav[]> {
    return this.http.get<Sav[]>(this.baseUrl);
  }

  getSavById(id: number): Observable<Sav> {
    return this.http.get<Sav>(`${this.baseUrl}${id}`);
  }

  createSav(sav: Sav): Observable<Sav> {
    return this.http.post<Sav>(this.baseUrl, sav);
  }

  updateSav(updatedSav: Sav, id: number): Observable<Sav> {
    return this.http.put<Sav>(`${this.baseUrl}${id}`, updatedSav);
  }

  deleteSav(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}${id}`);
  }
}
