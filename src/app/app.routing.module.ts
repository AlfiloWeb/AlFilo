import { NgModule } from '@angular/core';
import {RouterModule,Routes} from "@angular/router";

import {LandingComponent} from "./components/landing/landing.component";
import {WikiComponent} from "./components/wiki/wiki.component";

const routes: Routes = [
  {path: '',component: LandingComponent},
  {path: 'wiki', component: WikiComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
