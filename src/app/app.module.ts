import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { StudsComponent } from './studs/studs.component';
import { FemalesComponent } from './females/females.component';
import { PupsComponent } from './pups/pups.component';
import { HistoricallyprovenstudsComponent } from './historicallyprovenstuds/historicallyprovenstuds.component';
import { HistoricallyprovenfemalesComponent } from './historicallyprovenfemales/historicallyprovenfemales.component';
import { ContactusComponent } from './contactus/contactus.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    StudsComponent,
    FemalesComponent,
    PupsComponent,
    HistoricallyprovenstudsComponent,
    HistoricallyprovenfemalesComponent,
    ContactusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
