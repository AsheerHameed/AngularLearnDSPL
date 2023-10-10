import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss'],
})
export class UserAddComponent {
  user: User = {
    id:0,
    fullName: '',
    email: '',
    username: '',
    password: '',
    dob:'',
    gender: '',
  };

  constructor(private router: Router, private userService: UserService) {}

  onSubmit() {
    // Check if the form is valid
    if (this.isFormValid()) {
      // Perform form submission logic here
      // For demonstration purposes, we'll log the user object
      console.log('User submitted:', this.user);

      // Add the user to your UserService or send the data to an API
      this.userService.addUser(this.user);

      // After a successful submission, navigate to the '/list' route
      this.router.navigate(['/list']);
    } else {
      // Handle invalid form submission, e.g., display an error message
      console.error('Form submission failed. Please fill in all required fields.');
    }
  }

  // Custom method to check if the form is valid
  isFormValid(): boolean {
    // Implement your custom form validation logic here
    // For simplicity, we'll check if the 'fullName', 'email', 'username', and 'password' fields are not empty
    return (
      this.user.fullName.trim() !== '' &&
      this.user.email.trim() !== '' &&
      this.user.username.trim() !== '' &&
      this.user.password.trim() !== ''
    );
  }
}
