import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { ContatoComponent } from './components/contato/contato.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { CompraComponent } from './compra/compra.component';

import { ProdutoDeleteComponent } from './delete/produto-delete/produto-delete.component';
import { ProdutoEditComponent } from './edit/produto-edit/produto-edit.component';
import { UsuarioEditComponent } from './edit/usuario-edit/usuario-edit.component';
import { VoluntarioComponent } from './voluntario/voluntario.component';

const routes: Routes = [

  //Mandado o site iniciar na página Home 
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  //Outras rotas
  { path: 'cadastro', component: CadastroComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'rodape', component: RodapeComponent },
  { path: 'produtos', component: ProdutosComponent },
  {path:'compra', component: CompraComponent},       
  
  { path: 'produto-edit/:id', component: ProdutoEditComponent },
  { path: 'produto-delete/:id', component: ProdutoDeleteComponent },
  { path: 'voluntario', component: VoluntarioComponent },
  { path:  'carrinho', component: CarrinhoComponent},
  { path: 'usuario-edit/:id', component: UsuarioEditComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }