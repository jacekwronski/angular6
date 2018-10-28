import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{ type:'server', name:'test server', content:'test content'}];

  onServerAdded(serverData: {
    serverName : string,
    serverContent : string
  }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    })
  }

  onBlueprintAdded(serverData: {
    serverName : string,
    serverContent : string
  }) {
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.serverName,
      content: serverData.serverContent
    })
  }

  onChangeFirstElement() {
    this.serverElements[0].name = "changed";
  }
}
