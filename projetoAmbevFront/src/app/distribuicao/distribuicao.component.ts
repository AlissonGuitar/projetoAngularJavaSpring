import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-distribuicao',
  templateUrl: './distribuicao.component.html',
  styleUrls: ['./distribuicao.component.css']
})
export class DistribuicaoComponent implements OnInit {

  titulo:String;


  constructor() { }

  ngOnInit() {
    this.titulo = "Distribuição Cliente para Vendedores";
  }

}
