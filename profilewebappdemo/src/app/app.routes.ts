import { Routes } from '@angular/router';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ExpertiseComponent } from './components/expertise/expertise.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { AchivementsComponent } from './components/achivements/achivements.component';
import { TrainingComponent } from './components/training/training.component';
import { ContactmeComponent } from './components/contactme/contactme.component';
import { HomeComponent } from './components/home/home.component';
import { CreateExpertiseComponent } from './components/create-expertise/create-expertise.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: 'home', component: HomeComponent},
    {path:'aboutme',component:AboutmeComponent},
    {path:'expertise', component:ExpertiseComponent,
    children: [{path: 'expert/create', component: CreateExpertiseComponent}]
    },
    {path:'experience', component:ExperienceComponent},
    {path:'hobbies', component:HobbiesComponent},
    {path:'achivements', component:AchivementsComponent},
    {path:'training', component:TrainingComponent},
    {path:'contactme',component:ContactmeComponent}

];
