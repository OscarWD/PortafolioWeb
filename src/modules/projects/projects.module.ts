import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects-routing.module';

//Modules
import { NavigationModule } from "@navigation/navigation.module";

//Components
import * as projectsComponents from './components';

//Containers 
import * as projectsContainers from './containers';

@NgModule({
  declarations: [projectsComponents.components, projectsContainers.containers],
  exports: [projectsComponents.components, projectsContainers.containers],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    NavigationModule
  ]
})
export class ProjectsModule { }
