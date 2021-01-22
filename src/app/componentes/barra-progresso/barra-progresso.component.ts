import { Component, Input, OnInit } from '@angular/core';
import { MatProgressBarModule, ThemePalette } from '@angular/material';

@Component({
  selector: 'app-barra-progresso',
  templateUrl: './barra-progresso.component.html',
  styleUrls: ['./barra-progresso.component.scss']
})
export class BarraProgressoComponent implements OnInit {

  public bufferValue = 75;
  color: ThemePalette = 'primary';
  mode: MatProgressBarModule = 'determinate';

  @Input() public imagens;
  @Input() public valor;

  constructor() { }

  ngOnInit() {
  }

}
