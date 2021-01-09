import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  public dadosUsuario = [
    {
      id: 1,
      nome: 'Usuario 1',
      img: 'foto1',
      user: 'usuario123',
    },
    {
      id: 2,
      nome: 'Usuario 2',
      img: 'foto2',
      user: 'usuario345',
    },
    {
      id: 3,
      nome: 'Usuario 3',
      img: 'foto3',
      user: 'usuario567',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
