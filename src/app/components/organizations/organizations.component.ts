import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.css']
})
export class OrganizationsComponent implements OnInit {
  showOrgModal: boolean;
  constructor() { }

  ngOnInit(): void {
    this.showOrgModal = false;
  }

}
