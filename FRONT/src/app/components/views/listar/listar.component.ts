import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Pessoa } from "../../../models/Pessoa";

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  pessoas: Pessoa[] = [];

  constructor(private http: HttpClient) 
  { 
    http.get<Pessoa[]>("http://localhost:3000/pessoa/listar").
    subscribe((dados) =>{
        this.pessoas = dados;
        console.log(this.pessoas);

    });

  }

  ngOnInit(): void {
  }

}
