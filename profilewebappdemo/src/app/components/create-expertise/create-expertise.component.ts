import { Component } from '@angular/core';
import { ExpertiseService } from '../../services/expertise.service';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-create-expertise',
  imports: [FormsModule],
  templateUrl: './create-expertise.component.html',
  styleUrl: './create-expertise.component.css'
})
export class CreateExpertiseComponent {

  constructor (protected _expertiseSer : ExpertiseService) {  }

  SubmitExpertiseFrmData(frmExpertise: any) {
    this._expertiseSer.addExpertiseData({
      expertiseArea: frmExpertise.value.expertiseArea,
      description: frmExpertise.value.description
  });
  }


}
