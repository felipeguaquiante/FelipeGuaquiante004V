import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaestroPage } from './maestro.page';

const routes: Routes = [
  {
    path: '',
    component: MaestroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaestroPageRoutingModule {}
