import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { session } from '../session';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin> {
    return this.http.post<UsuarioLogin> ('usuario/logar', usuarioLogin)
  }

  cadastrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin> {
    return this.http.post<UsuarioLogin>('usuario/cadastrar', usuarioLogin)
  }

<<<<<<< HEAD



  

  logado(){
=======
  isLogged(){
>>>>>>> 8828e4ac4b548d91e107c6631c68130485966519
    let ok: boolean = false

    if(session.token != ''){
      ok = true
    }

    return ok
  }

}
