import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NodesComponent } from './components/nodes/nodes.component';
import { ChannelsComponent } from './components/channels/channels.component';
import { SmartcontractsComponent } from './components/smartcontracts/smartcontracts.component';
import { OrganizationsComponent } from './components/organizations/organizations.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    TabsComponent,
    DashboardComponent,
    NodesComponent,
    ChannelsComponent,
    SmartcontractsComponent,
    OrganizationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
