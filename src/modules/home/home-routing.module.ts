import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Containers
import * as homeContainers from './containers';

const routes: Routes = [
  {
    path:'',
    component: homeContainers.HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
