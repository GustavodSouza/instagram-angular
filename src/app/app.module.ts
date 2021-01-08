import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './template/toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-ui.module';
import { FeedComponent } from './paginas/feed/feed.component';
import { ContainerComponent } from './paginas/container/container.component';
import { HistoriesComponent } from './componentes/histories/histories.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FeedComponent,
    ContainerComponent,
    HistoriesComponent
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