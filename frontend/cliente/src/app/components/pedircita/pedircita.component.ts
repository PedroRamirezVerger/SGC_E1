import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedircita',
  templateUrl: './pedircita.component.html',
  styleUrls: ['./pedircita.component.css']
})
export class PedircitaComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  anadircita(){
    this.router.navigate(['/citas'])
  }

}
