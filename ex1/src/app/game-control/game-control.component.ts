import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() gameEvent = new EventEmitter<Number>();
  ref : any;

  constructor() { }

  onGameStart() {
    var counter: number = 0;
    var $this = this;
    this.ref = setInterval(function() {

      counter = counter + 1;
      $this.gameEvent.emit(counter);
    }, 1000)
  }

  onGameStop() {
    clearInterval(this.ref);
  }

  ngOnInit() {
  }

}
