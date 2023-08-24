import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import { PlayerComponent } from './poker-table/player/player.component';
import { PokerTableComponent } from './poker-table/poker-table.component';
import { AppRoutingModule } from './app-routing.module';
import { StartComponent } from './start/start.component';
import { ResultComponent } from './poker-table/result/result.component';
import { InformationComponent } from './poker-table/information/information.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    PokerTableComponent,
    StartComponent,
    ResultComponent,
    InformationComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
