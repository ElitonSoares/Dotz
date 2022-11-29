import { Sales } from './../logged/produtos/interfaces/sales';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SalesService {
  private readonly theUrlApi = `${environment.theUrlApi}sales`;
  constructor(private httpClient: HttpClient) {}
  getSales(): Observable<Sales[]> {
    return this.httpClient.get<Sales[]>(`${environment.theUrlApi}/sales`);
  }
  venda(form: any): Observable<Sales[]> {
    return this.httpClient.post<any>(`${environment.theUrlApi}/sales`, form);
  }
  remove( id: any) {
    return this.httpClient.delete<Sales[]>(`${environment.theUrlApi}/sales/${id}`);
  }
}
