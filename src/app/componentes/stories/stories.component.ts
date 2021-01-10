import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {

  public indexAtual = 0;
  public corte = 6;
  public dadosUsuario;

  constructor() { }

  public ngOnInit(): void {
    this.dadosUsuario = JSON.parse(sessionStorage.getItem('USUARIOS'));
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
