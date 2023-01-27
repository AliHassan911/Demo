import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { FemalesComponent } from './females/females.component';
import { HistoricallyprovenfemalesComponent } from './historicallyprovenfemales/historicallyprovenfemales.component';
import { HistoricallyprovenstudsComponent } from './historicallyprovenstuds/historicallyprovenstuds.component';
import { HomeComponent } from './home/home.component';
import { PupsComponent } from './pups/pups.component';
import { StudsComponent } from './studs/studs.component';

const routes: Routes = [
  {path: '' , component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'studs', component:StudsComponent},
  {path:'females', component:FemalesComponent},
  {path:'pups', component:PupsComponent},
  {path:'contactus', component:ContactusComponent},
  {path:'historicallyprovenstuds', component:HistoricallyprovenstudsComponent},
  {path:'historicallyprovenfemales', component:HistoricallyprovenfemalesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
