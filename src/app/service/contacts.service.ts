import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  public url: string =
    'https://my-json-server.typicode.com/mabukoush1/contacts/db';
  getContacts() {
    return this.http.get<any>(this.url);
  }

  constructor(private http: HttpClient) {}
}
