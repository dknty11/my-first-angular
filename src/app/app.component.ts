import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  serverElements = [
    {name: 'server', type: 'server', content: 'hi hi'}
  ];


  constructor() {}

  ngOnInit() {
  }

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      name: 'server',
      type: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {blueprintName: string, blueprintContent: string}) {
    this.serverElements.push({
      name: 'blueprint',
      type: blueprintData.blueprintName,
      content: blueprintData.blueprintContent
    });
  }

}
