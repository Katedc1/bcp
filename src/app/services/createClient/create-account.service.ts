import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateCuentaReq } from '../createAccount/model/createCuentaReq';
import { Observable, timeout } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CreateAccountService {
  constructor(private http: HttpClient) {}

  createCuenta(body: CreateCuentaReq): Observable<any> {
    const url = `http://localhost:8080/api/createCuenta`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(url, body, { headers }).pipe(timeout(61000));
  }
}
