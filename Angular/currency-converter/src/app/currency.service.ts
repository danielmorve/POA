import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICurrency } from './currency.interface';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private readonly API_URL = 'https://us-central1.gcp.data.mongodb-api.com/app/mtwdm-drwqq/endpoint/unit/converter';

  constructor(private http: HttpClient) {}

  getCurrencyData(): Observable<ICurrency[]> {
    return this.http.get<ICurrency[]>(this.API_URL);
  }
}
