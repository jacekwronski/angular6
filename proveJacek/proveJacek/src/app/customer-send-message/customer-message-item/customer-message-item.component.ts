import { Component, OnInit, Input } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { CustomerService } from '../../customer.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-customer-message-item',
  templateUrl: './customer-message-item.component.html',
  styleUrls: ['./customer-message-item.component.css']
})
export class CustomerMessageItemComponent implements OnInit {

  @Input() message: Message;

  @Input() idMessage: number;

  id: String;


  constructor(private customerService: CustomerService, private activeRoute: ActivatedRoute) { 
  }

  ngOnInit() {
    this.activeRoute.params.subscribe((params: Params) => this.id = params["id"]);
  }

  onRemove() {
    this.customerService.removeMessage(this.id, this.idMessage);
  }

}
