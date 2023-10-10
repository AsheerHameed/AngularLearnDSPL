import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [
    {
      "id":1,
      "fullName": "John Doe",
      "email": "john@example.com",
      "username": "johndoe",
      "password": "Password1",
      "dob": "1990-05-15",
      "gender": "male"
    },
    {
      "id":2,
      "fullName": "Alice Smith",
      "email": "alice@example.com",
      "username": "alicesmith",
      "password": "Password2",
      "dob": "1985-08-22",
      "gender": "female"
    },
    {
      "id":3,
      "fullName": "Bob Johnson",
      "email": "bob@example.com",
      "username": "bobjohnson",
      "password": "Password3",
      "dob": "1988-12-10",
      "gender": "male"
    },
    {
      "id":4,
      "fullName": "Eve Adams",
      "email": "eve@example.com",
      "username": "eveadams",
      "password": "Password4",
      "dob": "1995-03-25",
      "gender": "female"
    },
    {
      "id":5,
      "fullName": "Charlie Brown",
      "email": "charlie@example.com",
      "username": "charliebrown",
      "password": "Password5",
      "dob": "1982-07-05",
      "gender": "male"
    }
  ];

  addUser(user: User) {
    this.users.push(user);
  }

  getUsers() {
    return this.users;
  }

  // New method to retrieve a user by their email or username
  getUserById(id: string): User | undefined {
    const idNumber = parseInt(id, 10); // Convert the id parameter to a number
    return this.users.find(user => user.id === idNumber);
  }
  
}
