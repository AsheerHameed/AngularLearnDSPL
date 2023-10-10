import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  users: User[] = [];

  constructor(private userService: UserService, private router: Router) {
    this.users = this.userService.getUsers();
  }

  navigateToUserDetails(userId: number) {
    this.router.navigate(['/user', userId]);
  }
}
