import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  getContacts(): any {
    return this.http.get('http://localhost:3000/api/v1/contacts');
  }

  addContact(newContact: Contact): any {
    return this.http.post('http://localhost:3000/api/v1/contact', newContact);
  }

  deleteContact(id: string): any {
    return this.http.delete(`http://localhost:3000/api/v1/contact/${id}`);
  }
}
