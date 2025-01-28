import { Component } from '@angular/core';
import { ExpertiseService } from '../../services/expertise.service';
import { NgFor } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-expertise',
  imports: [RouterOutlet, RouterLink, NgFor],
  templateUrl: './expertise.component.html',
  styleUrl: './expertise.component.css'
})
export class ExpertiseComponent {
  ExpertiseComData: any;

constructor(protected _expertiseSer: ExpertiseService) {
  this._expertiseSer.getExpertiseData();
 }
}
