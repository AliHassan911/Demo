import { Component, OnInit } from '@angular/core';
import {FormGroup , FormBuilder, Validators} from '@angular/forms';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';



@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit{


  contactForm: FormGroup ;
  isSubmit = true;
  submitMessage='';

  private myForm: AngularFirestoreCollection ;

constructor(private formBuilder : FormBuilder , private firestore : AngularFirestore){
  this.myForm = this.firestore.collection('enquiry');
  this.contactForm= this.formBuilder.group({
    name:[null,Validators.required],
    email:[null, [Validators.required , Validators.email]],
    phonenumber:[null, Validators.required],
    subject:[null, Validators.required],
    message:[null, Validators.required],
  })
}
  ngOnInit(){

  }

  submitData( value : any){
    // console.log(value);

     this.myForm.add(value)
     .then((res: any)=>{
      this.submitMessage ='Submitted Successfully';
     })
     .catch((err: any)=>{
      console.log(err);
     })


    this.isSubmit=true;
    setTimeout(() => {
      this.isSubmit=false;
    }, 7000);
  }

}
