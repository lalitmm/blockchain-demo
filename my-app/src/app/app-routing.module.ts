import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {MovemoneyComponent} from "./movemoney/movemoney.component";
import {AlldoneComponent} from "./alldone/alldone.component";

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'movemoney', component: MovemoneyComponent },
  { path: 'alldone', component: AlldoneComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
