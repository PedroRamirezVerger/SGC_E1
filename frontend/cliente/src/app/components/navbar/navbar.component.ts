import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loginPasado: boolean;

  
  constructor(private router:Router,
              private activateRoute: ActivatedRoute,
              private cookieService: CookieService) {

  }


  

  ngOnInit() {
    // this.loginService.isAuthenticated()
    this.activateRoute.params.subscribe(params => {
      console.log(params);
      if(params['dni'])
        this.loginPasado = true;
      else
        this.loginPasado = false;
    });
  }
  cerrarsesion(){
    this.cookieService.delete('usuario')
    this.router.navigate(['login'])
  }

}
