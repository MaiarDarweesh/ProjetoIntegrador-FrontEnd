import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllProduto(): Observable<Produto[]> {
    return this.http.get<Produto[]>('produto', this.token)
  }

  getByIdProduto(id: number): Observable<Produto> {
    return this.http.get<Produto>(`produto/${id}`, this.token)
  }
  
  getByNomeProduto(nome: string): Observable<Produto[]> {
    return this.http.get<Produto[]>(`produto/nome/${nome}`, this.token)
  }

  postProduto(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>('produto', produto, this.token)
  }

  putProduto(produto: Produto): Observable<Produto> {
    return this.http.put<Produto>('produto', produto, this.token)

  }
  deleteProduto(id: number) {
    return this.http.delete(`produto/${id}`, this.token)
  }
}