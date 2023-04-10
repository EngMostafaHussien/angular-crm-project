import { Component } from '@angular/core';
import { ContactsService } from '../service/contacts.service';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Contacts } from '../_models/contacts';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent {
  searchText: any;
  constructor(public get: ContactsService) {}
  contacts: Contacts[] = [];
  item: any;

  drop(event: CdkDragDrop<Contacts[]>) {
    this.item = this.contacts[event.previousIndex];
    if (event.previousContainer === event.container) {
      this.item.status = this.contacts[event.currentIndex].status;
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      this.item.status = this.contacts[event.currentIndex].status;
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
  ngOnInit(): void {
    this.get.getContacts().subscribe((res) => {
      this.contacts = res.deals;
    });
  }
}
