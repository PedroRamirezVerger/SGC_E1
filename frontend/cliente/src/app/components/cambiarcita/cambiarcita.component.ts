import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cambiarcita',
  templateUrl: './cambiarcita.component.html',
  styleUrls: ['./cambiarcita.component.css']
})
export class CambiarcitaComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  confirmarnuevacita(){
    this.router.navigate(['/citas'])
  }
}
