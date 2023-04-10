import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [ContactsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    DragDropModule,
    FormsModule,
    Ng2SearchPipeModule,
  ],
  exports: [ContactsComponent],
})
export class ContactsModule {}
