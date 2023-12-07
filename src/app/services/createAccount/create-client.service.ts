import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, timeout } from 'rxjs';
import { CreateClientReq } from '../createClient/model/createClientReq';

@Injectable({
  providedIn: 'root',
})
export class CreateClientService {
  constructor(private http: HttpClient) {}

  createClient(body: CreateClientReq): Observable<any> {
    const url = `http://localhost:8080/api/createClient`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(url, body, { headers }).pipe(timeout(61000));
  }
}
