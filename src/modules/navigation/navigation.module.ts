import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

//Containers
import * as navigationContainers from './containers';

//Layouts
import * as appCommonLayouts from './layouts';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule
  ],
  declarations: [
    navigationContainers.containers,
    appCommonLayouts.layouts
  ],
  exports:[
    navigationContainers.containers,
    appCommonLayouts.layouts
  ]
})
export class NavigationModule { }
