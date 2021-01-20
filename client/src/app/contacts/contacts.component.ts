import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [ContactService]
})
export class ContactsComponent implements OnInit {
  contacts: Contact[] = [];
  contact!: Contact;
  firstName!: string;
  lastName!: string;
  phoneNumber!: string;

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.getContacts();
  }

  getContacts(): void {
    this.contactService.getContacts().subscribe((contacts: Contact[]) => {
      this.contacts = contacts;
      console.log(this.contacts);
    });
  }

  deleteContact(id: any): void {
    const contacts = this.contacts;

    this.contactService.deleteContact(id).subscribe((response: any) => {
      if (response.n === 1) {
        contacts.splice(this.contacts.findIndex(contact => contact._id === id), 1);
      }
    });
  }

  addContact(): void {
    const newContact: Contact = {
      firstName: this.firstName,
      lastName: this.lastName,
      phoneNumber: this.phoneNumber
    };

    this.contactService.addContact(newContact).subscribe(() => {
      this.contacts.push(newContact);
      this.getContacts();
    });
  }

}
