import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  title = 'newsmart';
  myimage:string = "https://i.imgur.com/2U02d5X.jpg"

  constructor() { }

  ngOnInit(): void {
  }

}
