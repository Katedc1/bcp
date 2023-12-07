import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, timeout } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CheckClientAccountService {
  constructor(private http: HttpClient) {}

  getRegistros(): Observable<any> {
    const url = `http://localhost:8080/api/getClientAccount`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.get<any>(url, { headers }).pipe(timeout(61000));
  }
}
