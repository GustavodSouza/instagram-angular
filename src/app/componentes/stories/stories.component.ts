import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {

  public indexAtual = 0;
  public corte = 6;

  public dadosUsuario = [
    {
      id: 1,
      nome: 'Usuario 1',
      img: 'foto1',
    },
    {
      id: 2,
      nome: 'Usuario 2',
      img: 'foto2',
    },
    {
      id: 3,
      nome: 'Usuario 3',
      img: 'foto3',
    },
    {
      id: 4,
      nome: 'Usuario 4',
      img: 'foto1',
    },
    {
      id: 5,
      nome: 'Usuario 5',
      img: 'foto2',
    },
    {
      id: 6,
      nome: 'Usuario 6',
      img: 'foto3',
    },
    {
      id: 7,
      nome: 'Usuario 7',
      img: 'foto4',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  public acao(eventoRecebido): void {

    console.log('Evento recebido', eventoRecebido.lado);


    if (eventoRecebido.lado === 'avanca') {
      this.corte += 1;
    }

    if (eventoRecebido.lado === 'retorna') {
      console.log('Entrou retorna');

      this.corte -= 1;
    }
    this.indexAtual = eventoRecebido.novoIndex;
  }

  public cortar(): number {
    if (this.corte === this.dadosUsuario.length) {
      return;
    }
    return this.corte;
  }
}
