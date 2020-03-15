import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../../models/response/clienteModel';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  listaClientes: Cliente[];

  constructor(private clienteService: ClienteService) { }
  
  ngOnInit() {
    this.clienteService
      .obtemLista() 
      .then((retorno: Cliente[]) => {
          if(retorno && retorno.length){
            this.listaClientes = retorno;
          }  
    });
  }
}
