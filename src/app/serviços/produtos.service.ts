import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { interfaceProduto } from '../logged/produtos/interfaces/interfaceProduto';

@Injectable({
  providedIn: 'root',
})
export class ProdutosService {
  constructor(private httpClient: HttpClient) {}

  todosProdutos(): Observable<interfaceProduto[]> {
    return this.httpClient.get<interfaceProduto[]>(
      `${environment.theUrlApi}/products`
    );
  }

  getProdutosDetalhes(produtId: Number): Observable<interfaceProduto> {
    return this.httpClient.get<interfaceProduto>(
      `${environment.theUrlApi}/products/${produtId}`
    );
  }

  getProducto(idProduct: any) {
    return this.httpClient.get<any>(
      `${environment.theUrlApi}/products/${idProduct}`
    );
  }
}
