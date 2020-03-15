import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  className = 'active_item';
  dashboard = '';
  node = '';
  organization = '';
  channel = '';
  contract = '';

  constructor() { }

  ngOnInit(): void {
  }

  setActiveClass(name) {
    if (name === 'dashboard') {
      this.dashboard = this.className;
      this.node = this.organization = this.channel = this.contract = '';
    } else if (name === 'node') {
      this.node = this.className;
      this.dashboard = this.organization = this.channel = this.contract = '';
    } else if (name === 'organization') {
      this.organization = this.className;
      this.node = this.dashboard = this.channel = this.contract = '';
    } else if (name === 'channel') {
      this.channel = this.className;
      this.node = this.organization = this.organization = this.contract = '';
    } else if (name === 'contract') {
      this.contract = this.className;
      this.node = this.organization = this.channel = this.dashboard = '';
    }
  }
}
