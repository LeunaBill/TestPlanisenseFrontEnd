import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArbresParArrondissement } from '../Models/ArbresParArrondissement';
import { ArbresParGenre } from '../Models/ArbresParGenre';

@Injectable({
  providedIn: 'root'
})
export class ArbreService {

  private baseUrl = 'http://localhost:8081/arbres';

  constructor(private http: HttpClient) { }

  getArbresParArrondissement(): Observable<ArbresParArrondissement[]> {
    return this.http.get<ArbresParArrondissement[]>(`${this.baseUrl}/arrondissements`);
  }

  getArbresParGenre(): Observable<ArbresParGenre[]> {
    return this.http.get<ArbresParGenre[]>(`${this.baseUrl}/genres`);
  }
}
