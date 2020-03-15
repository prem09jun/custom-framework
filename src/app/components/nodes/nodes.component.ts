import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nodes',
  templateUrl: './nodes.component.html',
  styleUrls: ['./nodes.component.css']
})
export class NodesComponent implements OnInit {
  showCAModal: boolean;
  showPeerModal: boolean ;
  showOrdererModal: boolean ;

  constructor() { }

  ngOnInit(): void {
    this.showCAModal = false;
    this.showPeerModal = false;
    this.showOrdererModal = false;
  }

  peerInfo() {
    this.showPeerModal = true;
  }

  caInfo() {
    this.showCAModal = true;
  }

  ordererInfo() {
    this.showOrdererModal = true;
  }

  closePeerModal() {
    this.showPeerModal = false;
  }

  closeCAModal() {
    this.showCAModal = false;
  }

  closeOrdererModal() {
    this.showOrdererModal = false;
  }

  createPeer() {

  }

  createCA() {

  }

  createOrderer() {

  }
}
