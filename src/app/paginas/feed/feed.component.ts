import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  public dadosUsuario;
  public imagens;

  constructor() { }

  public ngOnInit(): void {
    this.dadosUsuario = JSON.parse(sessionStorage.getItem('USUARIOS'));
    this.imagens = this.dadosUsuario.feedFotos;
    console.log('Dados recebidos', this.dadosUsuario);
  }
}
