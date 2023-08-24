import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PokerTableComponent} from "./poker-table/poker-table.component";
import {StartComponent} from "./start/start.component";

const routes: Routes = [
  { path: 'start', component: StartComponent },
  { path: 'poker-table', component: PokerTableComponent },
  { path: '', redirectTo: '/start', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
