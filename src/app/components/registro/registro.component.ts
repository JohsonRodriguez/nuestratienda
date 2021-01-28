import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  guardar(data:NgForm){
      
    console.log(data);
    this.http.post('https://nta-admin.herokuapp.com/vendedores/registro',data)
    .subscribe((result)=>{
      console.log("resultado enviado",result);
}) 
}

}
