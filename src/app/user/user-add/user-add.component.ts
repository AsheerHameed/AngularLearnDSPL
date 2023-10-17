import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DataService } from '../user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss'],
})
export class UserAddComponent {
  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  userForm = this.formBuilder.group({
    id:[this.dataService.lastId],
    email: [
      '',
      Validators.compose([Validators.email, Validators.required]),
    ],
    firstName: [''],
    lastName: [''],
    address: [''],
    dob: [''],
  });

  email = new FormControl('',[Validators.required]);
  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  address = new FormControl('', [
    Validators.required,
    Validators.minLength(15),
  ]);

  get userFirstName() {
    return this.userForm.get('firstName');
  }
  get userLastName() {
    return this.userForm.get('lastName');
  }
  get userAddress() {
    return this.userForm.get('address');
  }
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a email';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  submit() {
    this.router.navigate(['/users']);
    this.dataService.userData.push(this.userForm.value);
    this.snackBar.open('User added', 'Close', {
      duration: 3000,
    });
    this.dataService.lastId++
  }
}
