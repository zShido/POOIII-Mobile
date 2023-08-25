import { Component, OnInit } from '@angular/core';
import { Contato, Genero } from 'src/app/model/entities/Contato';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ContatoService } from 'src/app/model/services/contato.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {
  nome!: string;
  telefone! : number;
  email!: string;
  sexo!: Genero;
  lista_contatos: Contato[] = [];

  constructor(private alertController: AlertController,private router: Router, private contatoService : ContatoService) { }

  cadastrar(){
    if(!this.nome || !this.telefone){
      this.presentAlert("Erro", "Todos os campos são obrigatórios!");
    }else{
      this.presentAlert("Sucesso", "Contato Cadastrado!");
      let novo : Contato = new Contato(this.nome, this.telefone);
      novo.email = this.email;
      novo.sexo = this.sexo;
      this.contatoService.cadastrar(novo);
      this.router.navigate(["/home"])
    }
  }

  async presentAlert(subHeader: string, message: string) {
    const alert = await this.alertController.create({
      header: 'Agenda de Contatos',
      subHeader: subHeader,
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  ngOnInit() {
  }

}
