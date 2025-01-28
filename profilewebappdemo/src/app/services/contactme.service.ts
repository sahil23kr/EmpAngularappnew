import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactmeService {

  private apiUrl = 'https://emailtriggerfunct.azurewebsites.net/api/HttpExample?/addnewemp';
  ContactmeData:any;
  constructor(private _httpclient:HttpClient,private http: HttpClient) { }

  getContactmeData() {
    this._httpclient.get("https://jsonplaceholder.typicode.com/posts").subscribe((res) => {
      this.ContactmeData = res
    })
  }

  AddContactmeData(addcontactdata:any) {
    this._httpclient.post("https://employeejava-hkd0czhqcagjeuau.canadacentral-01.azurewebsites.net/addnewemp", addcontactdata).subscribe((res) => {
      if(res){
        alert('Contact details submit successfully');
        this.getContactmeData();
        this.sendContact({name: addcontactdata.name, email: addcontactdata.emailAddress});
      }
      else{
        alert('Error saving account details');
      }
    })
  }

  sendContact(contactData: { name: string; email: string }) {
    this.http.post(this.apiUrl, contactData).subscribe({
      next: (response) => {
        alert('Contact created and email sent successfully!');
      },
      error: (error) => {
        alert('Failed to send email. Please try again later.');
        console.error('Error details:', error);
      }
    });
  }
}
