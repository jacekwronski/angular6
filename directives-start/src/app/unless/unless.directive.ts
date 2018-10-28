import { Directive, OnInit, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective implements OnInit {

  @Input() set appUnless(value: boolean) {
    if(value === false) {
      this.vcRef.createEmbeddedView(this.tamplateRef);
    } else {
      this.vcRef.clear();
    }
  }

  ngOnInit() {

  }

  constructor(private tamplateRef: TemplateRef<any>, 
              private vcRef: ViewContainerRef) { }

}
