import { Message } from "./message";

export class Customer {

    constructor(id: String, name: String, vatId: String, address: String) {
        this.id = id;
        this.name = name;
        this.vatId = vatId;
        this.address = address;
        this.messages = new Array<Message>();
    }

    id: String;
    name: String;
    vatId: String;
    address: String;

    messages: Message[];
}