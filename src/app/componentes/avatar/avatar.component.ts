import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

  @Input() public dados;
  @Input() public mostrarNome;
  @Input() public largura;
  @Input() public peso;
  @Input() public borda;
  @Output() public evento = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  public abrirStories(): void {
    this.evento.emit();
  }

  public verificarBorda(): string {
    if (this.borda === 'bordaNormal') {
      return '2px solid red';
    } else if (this.borda === 'selecionado') {
      return '1px solid black';
    }

    return 'none';
  }
}
