import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './template/toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-ui.module';
import { FeedComponent } from './paginas/feed/feed.component';
import { ContainerComponent } from './paginas/container/container.component';
import { StoriesComponent } from './componentes/stories/stories.component';
import { AvatarComponent } from './componentes/avatar/avatar.component';
import { SetasComponent } from './componentes/setas/setas.component';
import { MenuLateralDireitoComponent } from './componentes/menu-lateral-direito/menu-lateral-direito.component';
import { FeedFotosComponent } from './componentes/feed-fotos/feed-fotos.component';
import { SugestaoComponent } from './paginas/sugestao/sugestao.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FeedComponent,
    ContainerComponent,
    StoriesComponent,
    AvatarComponent,
    SetasComponent,
    MenuLateralDireitoComponent,
    FeedFotosComponent,
    SugestaoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
