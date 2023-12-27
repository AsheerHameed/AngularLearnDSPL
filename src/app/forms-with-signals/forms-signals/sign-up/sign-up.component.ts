import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormsServiceService } from '../../forms-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  constructor(private dataService:FormsServiceService){}
  showLogin = false;

  email = signal("");
  password = signal("");
  confirmPassword = signal("");
  username = signal("");

  userSignUpForm = new FormGroup({
    email: new FormControl(this.email()),
    password: new FormControl(this.password()),
    confirmPassword: new FormControl(this.confirmPassword()),
    username: new FormControl(this.username())
  });

  onSubmit(){
    console.log(this.userSignUpForm.value);
     const formData = this.userSignUpForm.value;
     this.dataService.setFormData(formData);
  }
}
