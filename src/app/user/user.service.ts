import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [];

  addUser(user: User) {
    this.users.push(user);
  }

  getUsers() {
    return this.users;
  }
}
