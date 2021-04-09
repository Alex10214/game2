import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ScreenComponentComponent} from './components/screen-component/screen-component.component';
import {PopupComponentComponent} from './components/popup-component/popup-component.component';
import { GameCellComponent } from './components/game-cell/game-cell.component';
import { PopupCheckComponentComponent } from './components/popup-check-component/popup-check-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ScreenComponentComponent,
    PopupComponentComponent,
    GameCellComponent,
    PopupCheckComponentComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
