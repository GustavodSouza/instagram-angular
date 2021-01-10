import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  public itensToolbar = [
    {
      id: 1,
      nome: 'Página Inicial',
      rota: '/paginaInicial',
      iconeAtivo: '',
      iconeInativo: '',
    },
    {
      id: 2,
      nome: 'Mensagem',
      rota: '/mensagem',
      iconeAtivo: 'paper-plane-solid',
      iconeInativo: 'paper-plane-regular',
    },
    {
      id: 3,
      nome: 'Explorador',
      rota: '/explorar',
      iconeInativo: 'compass-regular',
      iconeAtivo: 'compass-solid',
    },
    {
      id: 4,
      nome: 'Curtidas',
      rota: '/curtidas',
      iconeInativo: 'heart-regular',
      iconeAtivo: 'heart-solid',
    }
  ]

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  // Verifica se a rota atual bate com a rota do item
  public verificarIcone(item): any {
    return this.router.url === item.rota ? item.iconeAtivo : item.iconeInativo;
  }
}
