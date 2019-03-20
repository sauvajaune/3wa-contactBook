import {Contact } from './contact.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class contactService {
  contactsChanged = new Subject<Contact[]>();

  private contacts: Contact[]  = [
    new Contact(
      'Michel Polnarref',
      'Chef de la chanson francaise',
      ''),

    new Contact(
      'jeff tuche',
      'c est quelq un',
        '' )
  ];

  getContacts() {
    return this.contacts.slice();
  }

  getContact(index: number) {
    return this.contacts[index];
  }

  addContact(contact: Contact){
    this.contacts.push(contact);
    this.contactsChanged.next(this.contacts.slice());
  }

  updateContact(index: number, newcontact: Contact) {
    this.contacts[index] = newcontact;
    this.contactsChanged.next(this.contacts.slice());
  }

  deleteContact(index: number) {
    this.contacts.splice(index, 1);
    this.contactsChanged.next(this.contacts.slice());
  }
}
