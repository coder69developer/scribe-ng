import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import * as firebase from 'firebase/app';
import * as auth from 'firebase/auth';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent{

  myForm!: FormGroup;

  constructor(public fb: FormBuilder){
    this.myForm = this.fb.group({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      confirmPassword:new FormControl(null, Validators.required)
    })
  }

  onSubmit(myForm:any){
    //console.log(this.myForm.value);
    let email:string = myForm.value.email;
    let password:string = myForm.value.password;

    let firstName:string = myForm.value.firstName;
    let lastName:string = myForm.value.lastName;
  }
}
