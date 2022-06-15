import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-voluntario',
  templateUrl: './voluntario.component.html',
  styleUrls: ['./voluntario.component.css']
})
export class VoluntarioComponent implements OnInit {

 
  usuarioLogin: UsuarioLogin = new UsuarioLogin

  confirmarSenha: string;
  tipoVoluntario: string

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)

     }

  confirmaSenha(event: any) {
    this.confirmarSenha = event.target.value
  }

  tipoVoluntarioo(event: any) {
    this.tipoVoluntario = event.target.value
  }

  voluntario() {
           alert('Parabéns por se voluntariar!')
      }
    

} 