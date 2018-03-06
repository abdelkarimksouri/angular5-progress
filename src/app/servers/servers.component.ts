import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-servers]',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  setAllowserver = false;
  serverCreated = 'no server created';
  serverName = 'test test';
  constructor() {

    setTimeout(() => {
      this.setAllowserver = true;
    }, 2000);
   }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = 'server was be created';
  }
  OnupdateServerNmae(args: any) {

    console.log(args);
    this.serverName = args.target.value;
  }

}
