import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Containers
import * as projectsContainers from "./containers";

const routes: Routes = [
  {
    path: '',
    component: projectsContainers.ProjectsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
