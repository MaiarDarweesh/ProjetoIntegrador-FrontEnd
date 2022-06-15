import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Categoria } from 'src/app/model/Categoria';
import { Produto } from 'src/app/model/Produto';
import { Usuario } from 'src/app/model/Usuario';
import { CategoriaService } from 'src/app/service/categoria.service';
import { ProdutoService } from 'src/app/service/produto.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categoria: Categoria = new Categoria()
  listacategorias: Categoria[]

  produto: Produto = new Produto
  listaProdutos: Produto[]
  idProduto: number


  user: Usuario = new Usuario()
  idUser = environment.id
  constructor(
    private router: Router,
    private categoriaService: CategoriaService,
    private produtoService: ProdutoService

  ) { }

  ngOnInit() {
    window.scroll(0,0)

  }


}