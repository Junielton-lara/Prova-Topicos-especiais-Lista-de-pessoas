import { PessoaService } from 'src/app/services/pessoa.services';
import { Pessoa } from './../../../models/Pessoa';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  pessoa: Pessoa = new Pessoa();


  constructor(private service: PessoaService) { }

  ngOnInit(): void { }

  cadastrar(): void {
    this.pessoa = new Pessoa();
    this.service.cadastrar(this.pessoa).subscribe((pessoa) => {
      console.log(pessoa);



    })

  }


}
