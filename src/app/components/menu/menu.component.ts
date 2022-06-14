import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  nome = environment.nome
  nomeUsuario: string


  constructor(

    public authService: AuthService,
    private router: Router

  ) { }

  ngOnInit() {
    this.nomeUsuario = environment.nome

  }

  sair() {
    environment.token = ''
    environment.nome = ''
    environment.voluntario = ''
    environment.id = 0
    this.router.navigate(['/home'])

  }

}


