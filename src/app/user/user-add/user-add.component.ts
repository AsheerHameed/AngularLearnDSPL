import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DataService } from '../user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss'],
})
export class UserAddComponent implements OnInit {
  minDate: Date | undefined;
  maxDate: Date | undefined;

  getErrorMessage: { [key: string]: string } = {};
  userForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private router: Router,
    private snackBar: MatSnackBar,

  ) {

    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(); 
    this.userForm = this.formBuilder.group({
      id: [this.dataService.lastId],
      email: ['', Validators.compose([Validators.email, Validators.required])],
      firstName: [
        '',
        Validators.compose([
          Validators.minLength(2),
          Validators.maxLength(30),
          Validators.required,
        ]),
      ],
      lastName: [
        '',
        Validators.compose([
          Validators.minLength(2),
          Validators.maxLength(30),
          Validators.required,
        ]),
      ],
      address: [
        '',
        Validators.compose([Validators.minLength(10), Validators.required]),
      ],
      dob: ['', Validators.required], 
    });
  }
  ngOnInit() {}

  setFieldErrorMessages() {
    this.getErrorMessage = {};
    const controls = this.userForm.controls;

    for (const field in controls) {
      if (controls.hasOwnProperty(field)) {
        if (controls[field].invalid) {
          if (controls[field].hasError('required')) {
            this.getErrorMessage[field] = 'This field is required';
          }
          if (controls[field].hasError('email')) {
            this.getErrorMessage[field] = 'Invalid email format';
          }
          if (controls[field].hasError('minlength')) {
            this.getErrorMessage[field] = 'Minimum length is 3 characters';
          }
        }
      }
    }
  }
  submit() {
    this.setFieldErrorMessages();   
    if (this.userForm.valid) {
      const userFormValue = { ...this.userForm.value }; // Create a copy of the form value
      userFormValue.dob = this.formatDate(this.userForm.value.dob); // Format the date
      this.dataService.userData.push(userFormValue); // Push the formatted value to userData
      this.router.navigate(['/users']);
      this.snackBar.open('User added', 'Close', {
        duration: 3000,
      });
      this.dataService.lastId++;
    }
  }
  resetForm(){
    this.userForm.reset();
  }
  formatDate(date: Date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
  }
  
}
