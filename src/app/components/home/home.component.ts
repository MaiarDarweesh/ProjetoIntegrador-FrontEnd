import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from 'ProjetoIntegrador-FrontEnd/src/app/service/auth.service';
import { Subscriber } from 'rxjs';
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


  user: Usuario = new Usuario ()
  idUser = environment.id
  constructor(
    private router: Router,
    private categoriaService: CategoriaService,
    private produtoService: ProdutoService,
    private authService: AuthService

  ) { }

<<<<<<< HEAD
  ngOnInit(): void {
    if(environment.token == ''){
        this.router.navigate(['/entrar'])
    }

    this.getAllProdutos()
    this.getAllCategoria()
=======
  ngOnInit() {
>>>>>>> 8828e4ac4b548d91e107c6631c68130485966519
  }

  getAllProdutos()
  this.produtoService.getAllProdutos().subscribe((resp: Produto[]) => {
    this.listaProdutos = resp
  })


    findByIdProduto(){
        this.produtoService.getByIdProduto(this.idProduto).subscribe((resp: Produto) =>{
          this.produto = resp:


    })
      getAllCategorias(){
        this.categoriaService.getAllCategorias().subscribe((resp: Categoria[]) =>{
        
        
      })
    

      findByIdUsuario(){
        this.authService.getByIdUsuario(this.idUser).subscribe((resp: Usuario)=>{
          this.usuario = resp


      })
    }

  publicar (){
    this.produto.id = this.idProduto
    this.categoria.produto = this.produto

      this.user.id = this.idUser
      this.categoria.usuario = this.user

      this.categoriaService.postCategoria(this.categoria).subscribe((resp:Categoria) => {
        this.categoria = resp
        alert('Categoria realizada com sucesso!')
        this.categoria = new Categoria()
        this.getAllCategoria()

    })
  }

}