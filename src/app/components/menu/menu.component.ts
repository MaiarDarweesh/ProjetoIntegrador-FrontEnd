import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { session } from 'src/app/session';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isLogged: boolean

  constructor(

    private router: Router,
    private auth: AuthService,
    route: ActivatedRoute

  ) {

    route.params.subscribe(val => {
      this.isLogged = auth.isLogged()
    });
  }

  ngOnInit() {

  }



}

