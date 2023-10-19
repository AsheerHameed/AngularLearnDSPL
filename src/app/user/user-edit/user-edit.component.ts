import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../user.service';
@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent implements OnInit {
  minDate: Date | undefined;
  maxDate: Date | undefined;
  userId: number | undefined;
  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private router: Router,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date();

    this.route.params.subscribe((params) => {
      this.userId = +params['id'];
      const user = this.dataService.getUserById(this.userId);
      this.userEditForm.patchValue({
        id: user?.id,
        email: user?.email,
        firstName: user?.firstName,
        lastName: user?.lastName,
        address: user?.address,
        dob: this.userEditForm.value.dob,
      });
    });
  }

  
  userEditForm = this.formBuilder.group({
    id: [0],
    email: [''],
    firstName: [''],
    lastName: [''],
    address: [''],
    dob: [new Date(), ''],
  });

  email = new FormControl(
    '',
    Validators.compose([Validators.required, Validators.email])
  );
  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  address = new FormControl('', [
    Validators.required,
    Validators.minLength(15),
  ]);

  get userFirstName() {
    return this.userEditForm.get('firstName');
  }
  get userLastName() {
    return this.userEditForm.get('lastName');
  }
  get userAddress() {
    return this.userEditForm.get('address');
  }
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a email';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  formatDate(inputDate: any): string {
    const date = new Date(inputDate);
    if (isNaN(date.getTime())) {
      return 'Invalid Date';
    }

    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based, so add 1
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }
  resetForm(){
    this.userEditForm.reset();
  }
  edit() {
    this.userEditForm.value.dob = this.formatDate(this.userEditForm.value.dob);

    this.router.navigate(['/users']);
    if (this.userId !== undefined) {
      this.dataService.updateUser(this.userId, this.userEditForm.value);
      this.snackBar.open('User updated', 'Close', {
        duration: 3000,
      });
      this.router.navigate(['/users']);
    }
    this.snackBar.open('Updated successfully', 'Close', {
      duration: 3000,
    });
  }
}
