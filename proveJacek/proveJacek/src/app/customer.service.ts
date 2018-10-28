import { Customer } from "./customer";
import { _ } from "underscore";
import { Message } from "./message";
import { Subject } from "rxjs";

export class CustomerService {

    messageAdded = new Subject<Message>();

    customers: Customer[] = [
        new Customer('1', 'H&S', '1231231', 'Via Emilia 43 Piacenza'),
        new Customer('2', 'Elfo srl', '5646332', 'Via Pastore 5 Fiorenzuola'),
        new Customer('3', 'Antas', '43243242', 'Via cos del rob San Nicolo'),
        new Customer('4', 'CRP', '34234223', 'Via Beati 66'),
        new Customer('5', 'Activity Club', '45464564', 'Via Stradella 23 Piacenza'),
        new Customer('6', 'Esselunga', '23423', 'Via Boh 43 Piacenza'),
    ]

    constructor() {

    }

    getCustomers() {
        return this.customers.slice();
    }

    getCustomerById(id: String) : Customer {
       const returnCustomer =  _.find(this.customers, { id: id});

       return returnCustomer;
    }

    addMessageToCustomer(id: String, message: Message) {
        const customer: Customer = this.getCustomerById(id);
        customer.messages.push(message);
        this.messageAdded.next(message);
    }

    removeMessage(id: String, idMessage: number) {
        const customer: Customer = this.getCustomerById(id);
        customer.messages.splice(idMessage, 1);
    }
}