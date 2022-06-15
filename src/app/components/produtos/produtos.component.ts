import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/model/Categoria';
import { Produto } from 'src/app/model/Produto';
import { Usuario } from 'src/app/model/Usuario';
import { AuthService } from 'src/app/service/auth.service';
import { CategoriaService } from 'src/app/service/categoria.service';
import { ProdutoService } from 'src/app/service/produto.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produto: Produto = new Produto()
  listaProduto: Produto[]


  title = 'newsmart';
  myimage: string = "https://i.imgur.com/2U02d5X.jpg"


  categoria: Categoria = new Categoria()
  listacategorias: Categoria[]

  user: Usuario = new Usuario()
  idProduto = environment.id

  constructor(
    private router: Router,
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    public authService: AuthService
  ) { }

  ngOnInit() {

    window.scroll(0,0)

    if (environment.token == '') {


      this.getAllProdutos()
      this.getAllCategoria()
    }

    this.findAllProdutos()
  }
  findAllProdutos() {
    this.produtoService.getAllProduto().subscribe((resp: Produto[]) => {
      this.listaProduto = resp
    })
  }


  cadastrar() {
    this.produtoService.postProduto(this.produto).subscribe((resp: Produto) => {
      this.produto = resp
      alert('Produto cadastrado com sucesso !!')
      this.findAllProdutos()
      this.produto = new Produto()
    })
  }

  getAllProdutos() {
    this.produtoService.getAllProduto().subscribe((resp: Produto[]) => {
      this.listaProduto = resp
    })
  }


  findByIdProduto() {
    this.produtoService.getByIdProduto(this.idProduto).subscribe((resp: Produto) => {
      this.produto = resp
    })
  }

  getAllCategoria() {
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) => {
    })
  }

  findAllCategoria() {
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) => {
      this.listacategorias = resp
    })
  }


  cadastrarCategoria() {
    this.categoriaService.postCategoria(this.categoria).subscribe((resp: Categoria) => {
      this.categoria = resp
      alert('Categoria cadastrada com sucesso!')
      this.findAllCategoria()
      this.categoria = new Categoria()

    })
  }

  alert(){
    alert('Item doado! Obrigado :)')
    
  }


}