import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClienteService } from '../cliente.service';
import { Validadores } from '../../utils/validator';
import { ResponseModel } from '../../models/response/responseModel';
import { ActivatedRoute  } from "@angular/router"
import { Cliente } from 'src/app/models/response/clienteModel';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  cliForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private clienteService: ClienteService,
    private router: ActivatedRoute ) {
    this.criarForm();
  }

  seErroNoCadastro: boolean = false;
  seSucessoNoCadastro: boolean = false;
  msgSucesso: string = "";

  criarForm() {
    this.cliForm = this.formBuilder.group({
      id: [''],
      nomecliente: ['', Validators.required],
      cpf: ['', Validadores.isValidCpf()],
      endereco: ['', Validators.required],
      numero: ['']
    });
  }

  salvar(cliente: Cliente) {
    this.clienteService.salvar(cliente)
      .then((retorno: ResponseModel) => {
        if (retorno && retorno) {
          this.seErroNoCadastro = false;
          this.seSucessoNoCadastro = retorno.sucesso
          this.msgSucesso = retorno.data;
        } else {
          this.seSucessoNoCadastro = false;
          this.seErroNoCadastro = retorno.sucesso
        }
      });
  }
  listaClientes: Cliente[];
  cliente = new Cliente();

  ngOnInit(): void {

    this.clienteService
      .obtemLista() 
      .then((retorno: Cliente[]) => {
          if(retorno && retorno.length){
            this.listaClientes = retorno;
            this.listaClientes.forEach(cli => {
              if(cli.id == this.router.snapshot.params.id )
              {
                this.cliente.id = cli.id;
                this.cliente.nome = cli.nome;
                this.cliente.cpf = cli.cpf;
                this.cliente.endereco = cli.endereco;
                this.cliente.numero = cli.numero;
              }
          });
          }  
    });    
  }
}
