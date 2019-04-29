import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProviderService} from './shared/services/provider.service';

import {MainComponent} from './main/main.component';

const routes: Routes = [
  {path: '', component: MainComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
