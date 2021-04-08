import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ScreenComponentComponent} from "./components/screen-component/screen-component.component";
import {ScoreComponentComponent} from "./components/score-component/score-component.component";
import {PopupComponentComponent} from "./components/popup-component/popup-component.component";

@NgModule({
  declarations: [
    AppComponent,
    ScreenComponentComponent,
    ScoreComponentComponent,
    PopupComponentComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
