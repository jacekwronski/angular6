import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { CustomerItemComponent } from './customer-item/customer-item.component';
import { CustomerService } from './customer.service';
import { AppRoutingModule } from './app-routing.module';
import { CustomerSendMessageComponent } from './customer-send-message/customer-send-message.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerMessageItemComponent } from './customer-send-message/customer-message-item/customer-message-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerItemComponent,
    CustomerSendMessageComponent,
    CustomerListComponent,
    CustomerComponent,
    CustomerMessageItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
