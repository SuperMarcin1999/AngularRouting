import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FirstComponent} from "./first/first.component";
import {SecondComponent} from "./second/second.component";
import {NotFoundComponent} from "./not-found/not-found.component";

// Wykonuja sie w kolejnosci (od gory do dolu)
const routes: Routes = [
  {path: 'first', component: FirstComponent},
  {path: 'second', component: SecondComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
