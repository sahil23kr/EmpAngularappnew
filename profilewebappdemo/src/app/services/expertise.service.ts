import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ExpertiseService {

  constructor(private _httpclient: HttpClient, private router: Router) { }
  ExpertiseData:any;

  getExpertiseData() {
      this._httpclient.get("https://profilewebapiustdemo.azurewebsites.net/api/AreasOfExpertises").subscribe((res) => {
      this.ExpertiseData = res
    })
  }

  addExpertiseData(addexpdata:any) {
    this._httpclient.post("https://profilewebapiustdemo.azurewebsites.net/api/AreasOfExpertises", addexpdata).subscribe((res) => {
      if(res){
        alert('Expertise details submit successfully');
        this.router.navigate(['/expertise']);
        this.getExpertiseData();
      }
      else{
        alert('Error saving account details');
      }
    })

  }  
}
