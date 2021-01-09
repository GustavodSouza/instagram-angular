import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-setas',
  templateUrl: './setas.component.html',
  styleUrls: ['./setas.component.scss']
})
export class SetasComponent implements OnInit {

  @Input() public lado;
  @Input() public indexAtual;
  @Input() public tamanho;
  @Input() public corte;
  @Output() public evento = new EventEmitter();

  public novoIndex;

  constructor() { }

  ngOnInit() {
  }

  public acao(): void {

    if (this.lado === 'retorna') {
      console.log('Seta retora');

      this.novoIndex = this.indexAtual;

      console.log('novoIndex', this.novoIndex);


      if (this.novoIndex === 0) {
        return;
      }

      this.novoIndex -= 1;
      this.evento.emit({
        novoIndex: this.novoIndex,
        lado: this.lado,
      });
    }

    if (this.lado === 'avanca') {
      console.log('Seta avança');
      this.novoIndex = this.indexAtual;

      if (this.corte === this.tamanho) {
        return;
      }

      this.novoIndex += 1;
      this.evento.emit({
        novoIndex: this.novoIndex,
        lado: this.lado,
      });
    }
  }

  public icone(): string {
    return this.lado === 'retorna' ? 'navigate_before' : 'navigate_next';
  }
}
