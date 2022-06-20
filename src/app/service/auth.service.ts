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

  cadastrar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>('usuario/cadastrar', usuario)
  }

  editar(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>('usuarios/atualizar', usuario, this.token)
  }

  getByIdUsuario(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`usuario/${id}`)
  }


  logado(){
    let ok: boolean = false

    if(environment.token != ''){
      ok = true
    }

    return ok
  }

  

}
