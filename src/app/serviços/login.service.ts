import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginModel } from '../models/loginModel';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly theUrlApi = `${environment.theUrlApi}users`;
  constructor(private httpClient: HttpClient) {}
  fazerLogin() {
    return this.httpClient.get<LoginModel[]>(`${environment.theUrlApi}/users`);
  }

  create(form: any): Observable<any> {
    return this.httpClient.post<any>(`${environment.theUrlApi}/users`, form);
  }

  loadById(id: any) {
    return this.httpClient.get(`${this.theUrlApi}/${id}`);
  }

  edit(form: any, id: any) {
    return this.httpClient.put<any>(
      `${environment.theUrlApi}/users/${id}`,
      form
    );
  }

  remove(form: any, id: any) {
    return this.httpClient.delete<any>(`${environment.theUrlApi}/users/${id}`);
  }
}
