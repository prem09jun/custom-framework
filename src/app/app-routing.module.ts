import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NodesComponent } from './components/nodes/nodes.component';
import { ChannelsComponent } from './components/channels/channels.component';
import { SmartcontractsComponent } from './components/smartcontracts/smartcontracts.component';
import { OrganizationsComponent } from './components/organizations/organizations.component';


const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'nodes', component: NodesComponent},
  {path: 'channels', component: ChannelsComponent},
  {path: 'smartcontracts', component: SmartcontractsComponent},
  {path: 'organizations', component: OrganizationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
