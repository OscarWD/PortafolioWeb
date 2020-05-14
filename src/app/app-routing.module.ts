import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('@home/home.module').then(mod => mod.HomeModule)
  },
  {
    path: 'projects',
    loadChildren: () => import('@projects/projects.module').then(mod => mod.ProjectsModule)
  },
  {
    path:'**',
    loadChildren: ()=> import('@error/error.module').then(mod=>mod.ErrorModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
