import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-lateral-direito',
  templateUrl: './menu-lateral-direito.component.html',
  styleUrls: ['./menu-lateral-direito.component.scss']
})
export class MenuLateralDireitoComponent implements OnInit {

  public usuarioLogado = {
    id: 1,
    nome: 'Gustavo',
    img: 'foto1',
    user: '_gustadodsouza',
  };

  constructor() { }

  ngOnInit() {
  }

}
