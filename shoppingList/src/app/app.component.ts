import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  storeFeature: string = 'recipes';


  onNavigate(featureSelected: string) {
    
    this.storeFeature = featureSelected;

    }
}
