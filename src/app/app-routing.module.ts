import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsymmetricComponent } from "./asymmetric/asymmetric.component";
import { AppComponent } from './app.component';
import {SymmetricComponent} from "./symmetric/symmetric.component";

const routes: Routes = [
  { path: 'asymmetric', component: AsymmetricComponent },
  { path: 'symmetric', component: SymmetricComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
