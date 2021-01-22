import { Route } from '@angular/compiler/src/core';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatTooltip } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @ViewChild(MatTooltip, { static: false }) public tooltip: MatTooltip;

  public menuAberto = false;
  public usuarioLogado;
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
    },
  ];
  public menuPerfil = [
    {
      id: 1,
      nome: 'Perfil',
      rota: '',
    },
    {
      id: 2,
      nome: 'Salvos',
      rota: '',
    },
    {
      id: 3,
      nome: 'Configurações',
      rota: '',
    },
    {
      id: 4,
      nome: 'Trocar de conta',
      rota: '',
    },
    {
      id: 5,
      nome: 'Sair',
      rota: '',
    },
  ];

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.usuarioLogado = JSON.parse(sessionStorage.getItem('USUARIO_LOGADO'));
  }

  // Verifica se a rota atual bate com a rota do item
  public verificarIcone(item): any {
    return this.router.url === item.rota ? item.iconeAtivo : item.iconeInativo;
  }

  public estadoMenu(): string {
    return this.menuAberto ? 'inline' : 'none';
  }
}
