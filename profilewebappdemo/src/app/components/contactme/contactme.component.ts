import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ContactmeService } from '../../services/contactme.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contactme',
  imports: [NgFor,FormsModule],
  templateUrl: './contactme.component.html',
  styleUrl: './contactme.component.css'
})
export class ContactmeComponent {

  constructor(protected _contactmeSer:ContactmeService) {
    this._contactmeSer.getContactmeData();
  }

  SubmitContactFrmData(frmContact: any) {
    this._contactmeSer.AddContactmeData({
      name: frmContact.value.name,
      emailAddress: frmContact.value.emailAddress,
      phoneNo: frmContact.value.phoneNo,
      description: frmContact.value.description
    });
  }
}
