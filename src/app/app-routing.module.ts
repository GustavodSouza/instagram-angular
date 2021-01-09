import { SugestaoComponent } from './paginas/sugestao/sugestao.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedComponent } from './paginas/feed/feed.component';


const routes: Routes = [
  {
    path: '',
    component: FeedComponent,
  },
  {
    path: 'sugestao',
    component: SugestaoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
