import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';

//Modules
import { NavigationModule } from "@navigation/navigation.module";

//Components
import * as homeComponents from './components';

//Containers
import * as homeContainers from './containers';

//Guards
import * as homeGuards from './guards';

//Services
import * as homeServices from './services';
import { SocialNetworkComponent } from './components/social-network/social-network.component';
import { PresentationComponent } from './components/presentation/presentation.component';

@NgModule({
  declarations: [
    ...homeComponents.components,
    ...homeContainers.containers,
    SocialNetworkComponent,
    PresentationComponent,
  ],
  exports: [
    ...homeComponents.components,
    ...homeContainers.containers
  ],
  providers:[
    ...homeGuards.guards,
    ...homeServices.services
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NavigationModule
  ]
})
export class HomeModule { }
