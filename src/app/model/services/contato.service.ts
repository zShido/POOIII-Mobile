import { Injectable } from '@angular/core';
import { Contato, Genero } from '../entities/Contato';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  private lista_contatos: Contato[] = [];

  constructor() {
    let c1 : Contato = new Contato("Cauby Foiudo",15997227211)
    c1.email = "caubyjeth13@gmail.com";
    c1.sexo = Genero.MASCULINO;
    let c2 : Contato = new Contato("Israel SemFoia", 4299242424)
    let c3 : Contato = new Contato("Willian PocaFoia", 42996696969)
    let c4 : Contato = new Contato("Ovidio PocaPika", 93995050505)
    this.lista_contatos.push(c1);
    this.lista_contatos.push(c2);
    this.lista_contatos.push(c3);
    this.lista_contatos.push(c4);
    
  }

  public obterTodos() : Contato[]{
    return this.lista_contatos;
  }

  public obterPorIndice(indice: number) : Contato{
    return this.lista_contatos[indice];
  }

  public cadastrar(contato: Contato){
    this.lista_contatos.push(contato);
  }
}
