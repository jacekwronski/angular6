import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  counterOdd: Number[] = [];
  counterEven: Number[] = [];

  onGameEvent(counter: number) {
    if(counter % 2 === 0) {
      this.counterEven.push(counter);
    }
    else {
      this.counterOdd.push(counter);
    }
  }
}
