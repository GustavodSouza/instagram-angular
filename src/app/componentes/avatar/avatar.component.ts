import { Component, Input, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  public abrirStories(): void {
    alert('Quase lá!!');
  }
}
