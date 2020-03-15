import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../models/response/clienteModel';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  uri = '';

  constructor(private http: HttpClient) { }

  public adicionar(nomecliente, cpf, endereco, numero): Promise<any> {
    //aqui seria obtido diretamente do arquivo de configuração a rota da API
    this.uri = 'http://www.mocky.io/v2/5e6e7a7b2f00002140a03898';

    const obj = {
      nome: nomecliente,
      cpf: cpf,
      endereco: endereco,
      numero: numero
    };
    console.log(obj);
    return this.http.get(`${this.uri}`).toPromise();
  }

  
  public salvar(cliente : Cliente): Promise<any> {
    //aqui seria obtido diretamente do arquivo de configuração a rota da API
    this.uri = 'http://www.mocky.io/v2/5e6ea31f2f00007900a03940';
    console.log(cliente);
    return this.http.get(`${this.uri}`).toPromise();
  }

  public obtemLista(): Promise<any>{
    this.uri = 'http://www.mocky.io/v2/5e6e9a762f0000c395a038d1';

    return this.http.get(`${this.uri}`).toPromise();
  }

}
