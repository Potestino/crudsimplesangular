import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClienteService } from '../cliente.service';
import { Validadores } from '../../utils/validator';
import { ResponseModel } from '../../models/response/responseModel';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent implements OnInit {

  cliForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private clienteService: ClienteService) {
    this.criarForm();
  }

  seErroNoCadastro: boolean = false;
  seSucessoNoCadastro: boolean = false;
  msgSucesso: string = "";

  criarForm() {
    this.cliForm = this.formBuilder.group({
      nomecliente: ['', Validators.required],
      cpf: ['', Validadores.isValidCpf()],
      endereco: ['', Validators.required],
      numero: ['']
    });
  }

  adicionar(nomecliente, cpf, endereco, numero) {
    this.clienteService.adicionar(nomecliente, cpf, endereco, numero)
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
  
  ngOnInit(): void {

  }
}
