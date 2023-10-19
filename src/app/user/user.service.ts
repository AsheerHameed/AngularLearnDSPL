import { Injectable } from '@angular/core';
import { userDataType } from './userDataType';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  lastId :number = 6;
  userData: any[] = [
    {
      id: 1,
      email: 'john@example.com',
      firstName: 'John',
      lastName: 'doe',
      address: 'Kolkata',
      dob:  '12/10/2023'
    },
    {
      id: 2,
      email: 'alice@example.com',
      firstName: 'Alice',
      lastName: 'smith',
      address:'Delhi',
      dob: '12/10/2023'
    },
    {
      id: 3,
      email: 'bob@example.com',
      firstName: 'Bob',
      lastName: 'Johnson',
      address: 'Bangalore',
      dob: '12/10/2023'
    },
    {
      id: 4,
      email: 'eve@example.com',
      firstName: 'Eve',
      lastName: ' Adams',
      address: 'Mumbai',
      dob: '12/10/2023'
    },
    {
      id: 5,
      email: 'charlie@example.com',
      firstName: 'Charlie',
      lastName: 'brown',
      address: 'Murdeshwar',
      dob:'12/10/2023'
    },
  ];

  addUser(user: any) {
    this.userData.push(user);
  }

  updateUser(id: number, updatedUser: any) {
    const index = this.userData.findIndex(user => user.id === id);
    if (index !== -1) {
      this.userData[index] = { ...this.userData[index], ...updatedUser };
    }
  }
  getUserById(id: number): userDataType | undefined {
    return this.userData.find((user) => user.id === id);

}
}