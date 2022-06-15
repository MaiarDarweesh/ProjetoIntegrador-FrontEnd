import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  token = 
  {
    headers: new HttpHeaders().set('authorization' , environment.token)
  }

  entrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin> {
    return this.http.post<UsuarioLogin> ('usuario/logar', usuarioLogin)
  }

  cadastrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin> {
    return this.http.post<UsuarioLogin>('usuario/cadastrar', usuarioLogin)
  }

  getByIdUser(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`usuario/${id}`)
  }

  usuarioById(id: number):Observable<UsuarioLogin>{
    return this.http.get<UsuarioLogin>(`usuarios/${id}`, this.token)
  }

  logado(){
    let ok: boolean = false

    if(environment.token != ''){
      ok = true
    }

    return ok
  }

  

}
