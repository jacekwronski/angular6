import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-item',
  templateUrl: './customer-item.component.html',
  styleUrls: ['./customer-item.component.css']
})
export class CustomerItemComponent implements OnInit {

  @Input() customer: Customer;

  constructor(private customerService: CustomerService) { 
    //this.customerService.messageAdded.subscribe((message: Message))
  }

  ngOnInit() {
    console.log(this.customer);
  }

  onSelected() {
    
  }

}
