import { Component, OnInit } from '@angular/core';
import { faChevronDown, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.scss']
})
export class MensagemComponent implements OnInit {

  public faArrow = faChevronDown;
  public faEdit = faEdit;

  public carregarMensagem = false;
  public idSelecionado;
  public dadosUsuario;

  public mensagem = [
    {
      id: 1,
      mensagem: 'Ola tudo bem ?',
    },
    {
      id: 2,
      mensagem: 'Eai',
    },
  ];

  constructor() { }

  public ngOnInit(): void {
    this.dadosUsuario = JSON.parse(sessionStorage.getItem('USUARIOS'));
  }

  public selecionar(id: number): void {
    this.idSelecionado = id;
    this.carregarMensagem = true;
  }

  public verificarUsuario(): any {
    let dado;

    console.log('Id Selecionado', this.idSelecionado);


    this.dadosUsuario.forEach((item) => {
      if (item.id === this.idSelecionado) {
        console.log('Ids', item.id);

        dado = item;
      }
    });
    return dado;
  }

  // public verificarMensagem(): any {
  //   let dado;

  //   this.mensagem.forEach((item) => {
  //     if (item.id === this.idSelecionado) {
  //       dado = item;
  //     }
  //   });

  //   return dado
  // }
}
