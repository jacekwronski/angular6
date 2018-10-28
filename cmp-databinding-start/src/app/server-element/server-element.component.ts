import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, 
  DoCheck, AfterContentInit, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit {

  @Input('srvElement') element: {
    type : string,
    name : string,
    content: string
  };

  @Input() name : string;
  @ContentChild('contentParagraph') parpagraph: ElementRef; 

  constructor() { 
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log(changes);
  }

  ngOnInit() {
    console.log('ng on init called');
    console.log('onInit Text content of: ' +  this.parpagraph.nativeElement.textContent);
  }

  ngDoCheck() {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log("do check called");
    
  }

  ngAfterContentInit() {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log('after content init');
    console.log('afterInit Text content of: ' +  this.parpagraph.nativeElement.textContent);
  }

}
