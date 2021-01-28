import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-precios',
  templateUrl: './precios.component.html',
  styleUrls: ['./precios.component.css']
})
export class PreciosComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  irRegistro(){
    this.router.navigate(['/registro']);
      }
}
