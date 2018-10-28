import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-send-message',
  templateUrl: './customer-send-message.component.html',
  styleUrls: ['./customer-send-message.component.css']
})
export class CustomerSendMessageComponent implements OnInit, OnDestroy {

  customer: Customer;

  customerMessage: FormGroup;

  constructor(private customerService: CustomerService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activeRoute.params.subscribe((param: Params) => {
      this.customer = this.customerService.getCustomerById(param["id"]);

      if(this.customerMessage !== null && this.customerMessage !== undefined) {
        this.customerMessage.reset();
      }

    });

    this.customerMessage = new FormGroup({
      'title': new FormControl(null, Validators.required),
      'content': new FormControl(null, Validators.required)
    });
  }

  ngOnDestroy() {
    this.customerMessage.reset();
  }

  onSubmit() {
    console.log(this.customerMessage);
    this.customerService.addMessageToCustomer(this.customer.id, this.customerMessage.value);
  }

}
