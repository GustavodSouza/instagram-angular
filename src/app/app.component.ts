import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'instagram';

  public usuarioLogado = {
    id: 1,
    nome: 'Gustavo de Souza',
    user: '_gustavodsouza',
    img: 'avatar8',
  }

  public usuarios = [
    {
      id: 2,
      nome: 'Carlos',
      user: 'carlosSilva1',
      img: 'avatar1',
      feedFotos: [
        'img1',
        'img2',
      ],
    },
    {
      id: 3,
      nome: 'Pedro',
      user: 'pedroFerreira_',
      img: 'avatar3',
      feedFotos: [
        'img3',
      ],
    },
    {
      id: 4,
      nome: 'Fulano',
      user: 'souza_fulano1',
      img: 'avatar4',
      feedFotos: [
        'img4',
      ],
    },
    {
      id: 5,
      nome: 'Matheus',
      user: 'matheus.teste',
      img: 'avatar1',
      feedFotos: [
        'img5',
      ],
    },
    {
      id: 6,
      nome: 'Fernanda',
      user: 'fernanda.teste',
      img: 'avatar5',
      feedFotos: [
        'img6',
      ],
    },
    {
      id: 7,
      nome: 'Marcia',
      user: 'marcia.marcia',
      img: 'avatar6',
      feedFotos: [
        'img7',
      ],
    },
    {
      id: 8,
      nome: 'Carla',
      user: 'carla.carla',
      img: 'avatar2',
      feedFotos: [
        'img8',
      ],
    },
    {
      id: 9,
      nome: 'Fernanda',
      user: 'fernanda.teste',
      img: 'avatar5',
      feedFotos: [
        'img6',
      ],
    },
    {
      id: 10,
      nome: 'Joaquim',
      user: 'joaquim.joaquim',
      img: 'avatar3',
      feedFotos: [
        'img7',
      ],
    },
    {
      id: 11,
      nome: 'Carla',
      user: 'carla.carla',
      img: 'avatar2',
      feedFotos: [
        'img8',
      ],
    },
  ]

  public ngOnInit(): void {
    sessionStorage.setItem('USUARIO_LOGADO', JSON.stringify(this.usuarioLogado));
    sessionStorage.setItem('USUARIOS', JSON.stringify(this.usuarios));
  }

}
