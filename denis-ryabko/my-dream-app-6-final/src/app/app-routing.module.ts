import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BazaComponent} from "./baza/baza.component";
import {AdminComponent} from "./admin/admin.component";

const routes: Routes = [
  {path: '', component:BazaComponent },
  {path: 'admin', component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
