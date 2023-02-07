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
import { ReactiveFormsModule } from '@angular/forms';
import {AngularFireModule} from '@angular/fire/compat';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyCDBEAlFUYAAjxpNeSPYlmbCc9Q6I5oyfk",
  authDomain: "kaleemikennels-35ef9.firebaseapp.com",
  databaseURL: "https://kaleemikennels-35ef9-default-rtdb.firebaseio.com",
  projectId: "kaleemikennels-35ef9",
  storageBucket: "kaleemikennels-35ef9.appspot.com",
  messagingSenderId: "799750126518",
  appId: "1:799750126518:web:be6219ce09100530721f17"
};

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
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAnalyticsModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
