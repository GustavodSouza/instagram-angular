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

  public dadosUsuario = [
    {
      id: 1,
      nome: 'Usuario 1',
      img: 'foto1',
      user: 'usuario1',
    },
    {
      id: 2,
      nome: 'Usuario 2',
      img: 'foto2',
      user: 'usuario2',
    },
    {
      id: 3,
      nome: 'Usuario 3',
      img: 'foto3',
      user: 'usuario3',
    },
    {
      id: 4,
      nome: 'Usuario 4',
      img: 'foto1',
      user: 'usuario4',
    },
    {
      id: 5,
      nome: 'Usuario 5',
      img: 'foto2',
      user: 'usuario5',
    },
    {
      id: 6,
      nome: 'Usuario 6',
      img: 'foto3',
      user: 'usuario6',
    },
    {
      id: 7,
      nome: 'Usuario 7',
      img: 'foto4',
      user: 'usuario7',
    },
  ];

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

  ngOnInit() {
  }

  public selecionar(id: number): void {
    this.idSelecionado = id;
    this.carregarMensagem = true;
  }

  public verificarUsuario(): any {
    let dado;

    this.dadosUsuario.forEach((item) => {
      if (item.id === this.idSelecionado) {
        dado = item;
      }
    });
    return dado;
  }

  public verificarMensagem(): any {
    let dado;

    this.mensagem.forEach((item) => {
      if (item.id === this.idSelecionado) {
        dado = item;
      }
    });

    return dado
  }
}
