import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loginPasado: boolean;

  
  constructor(private router:Router,
              private activateRoute: ActivatedRoute) {

  }


  

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      console.log(params);
      if(params['dni'])
        this.loginPasado = true;
      else
        this.loginPasado = false;
    });
  }

}
