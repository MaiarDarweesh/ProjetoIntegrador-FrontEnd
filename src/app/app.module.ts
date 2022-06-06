import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { ContatoComponent } from './components/contato/contato.component';
import { MenuComponent } from './components/menu/menu.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { HomeComponent } from './components/home/home.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { ProdutosComponent } from './components/produtos/produtos.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
