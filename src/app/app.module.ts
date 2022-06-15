import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { ContatoComponent } from './components/contato/contato.component';
import { MenuComponent } from './components/menu/menu.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { HomeComponent } from './components/home/home.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ProdutoEditComponent } from './edit/produto-edit/produto-edit.component';
import { ProdutoDeleteComponent } from './delete/produto-delete/produto-delete.component';
import { ApiInterceptor } from './interceptor/http-interceptor';
import { RouterModule } from '@angular/router';
import { CompraComponent } from './compra/compra.component';
import { VoluntarioComponent } from './voluntario/voluntario.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { UsuarioEditComponent } from './edit/usuario-edit/usuario-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    ContatoComponent,
    ProdutosComponent,
    LoginComponent,
    MenuComponent,
    SobreComponent,
    CadastroComponent,
    HomeComponent,
    RodapeComponent,
    ProdutoEditComponent,
    ProdutoDeleteComponent,
    CompraComponent,
    VoluntarioComponent,
    CarrinhoComponent,
    UsuarioEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy,
    },
  { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true }
],
  bootstrap: [AppComponent],
})
export class AppModule{}