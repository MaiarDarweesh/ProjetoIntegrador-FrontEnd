import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/model/Categoria';
import { Produto } from 'src/app/model/Produto';
import { Usuario } from 'src/app/model/Usuario';
import { AlertasService } from 'src/app/service/alertas.service';
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
  nomeProduto: string

  categoria: Categoria = new Categoria()
  listaCategorias: Categoria[]

  user: Usuario = new Usuario()
  idUser = environment.id

  idProduto = environment.id
  idCategoria: number

  constructor(
    private router: Router,
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    public authService: AuthService,
    private alertas: AlertasService

  ) { }

  ngOnInit() {

    window.scroll(0,0)

    if (environment.token == '') {
      this.router.navigate(['/produtos'])
    }

    this.findAllCategoria()
    this.findAllProdutos()
    this.getAllCategoria()
    this.getAllProdutos()
  }
  
  findAllProdutos() {
    this.produtoService.getAllProduto().subscribe((resp: Produto[]) => {
      this.listaProduto = resp
    })
  }

  findByNomeProduto() {

    if (this.nomeProduto == '') {
      this.getAllProdutos()
    } else {
      this.produtoService.getByNomeProduto(this.nomeProduto).subscribe((resp: Produto[]) => {
        this.listaProduto = resp
      })
    }
  }


  getAllCategoria() {
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) => {
    })
  }

  findByIdCategoria(){
    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: Categoria) => {
      this.categoria = resp
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


  findAllCategoria() {
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) => {
      this.listaCategorias = resp
    })
  }

  cadastrarProdutos() {
    this.categoria.id = this.idCategoria
    this.produto.categoria = this.categoria

    this.user.id = this.idUser
    this.produto.usuario = this.user

    this.produtoService.postProduto(this.produto).subscribe((resp: Produto) => {
      this.produto = resp
    this.alertas.showAlertSuccess('Produto cadastrado com sucesso !!')
      this.produto = new Produto()
    })
  }

  cadastrarCategoria() {
    this.categoriaService.postCategoria(this.categoria).subscribe((resp: Categoria) => {
      this.categoria = resp
      this.alertas.showAlertSuccess('Categoria cadastrada com sucesso!')
      this.categoria = new Categoria()

    })
  }

  alert(){
   this.alertas.showAlertSuccess('Item doado! Obrigado :)')
    
  }

  atualizar(){
    this.produtoService.putProduto(this.produto).subscribe((resp: Produto)=>{
      this.produto = resp
this.alertas.showAlertSuccess('Produto atualizado com sucesso!')
      this.router.navigate(['/produto'])


    })
  }

  apagar() {

    this.produtoService.deleteProduto(this.idProduto).subscribe(() => {
     this.alertas.showAlertSuccess('Produto apagada com sucesso!')
      this.router.navigate(['/home'])
    })
  }


}