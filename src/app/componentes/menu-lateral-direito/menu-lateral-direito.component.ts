import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-lateral-direito',
  templateUrl: './menu-lateral-direito.component.html',
  styleUrls: ['./menu-lateral-direito.component.scss']
})
export class MenuLateralDireitoComponent implements OnInit {

  public usuarioLogado;

  constructor() { }

  public ngOnInit(): void {
    this.usuarioLogado = JSON.parse(sessionStorage.getItem('USUARIO_LOGADO'));
  }
}
