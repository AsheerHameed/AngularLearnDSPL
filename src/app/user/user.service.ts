import { Injectable } from '@angular/core';

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
      dob: 'Thu Oct 26 2023 10:45:00 GMT+0530 (India Standard Time)',
    },
    {
      id: 2,
      email: 'alice@example.com',
      firstName: 'Alice',
      lastName: 'smith',
      address:'Delhi',
      dob: 'Fri Oct 27 2023 10:45:00 GMT+0530 (India Standard Time)',
    },
    {
      id: 3,
      email: 'bob@example.com',
      firstName: 'Bob',
      lastName: 'Johnson',
      address: 'Bangalore',
      dob: 'Sat Oct 28 2023 10:45:00 GMT+0530 (India Standard Time)',
    },
    {
      id: 4,
      email: 'eve@example.com',
      firstName: 'Eve',
      lastName: ' Adams',
      address: 'Mumbai',
      dob: 'Sun Oct 29 2023 10:45:00 GMT+0530 (India Standard Time)',
    },
    {
      id: 5,
      email: 'charlie@example.com',
      firstName: 'Charlie',
      lastName: 'brown',
      address: 'Murdeshwar',
      dob: 'Mon Oct 30 2023 10:45:00 GMT+0530 (India Standard Time)',
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
  getUserById(id: number) {
    return this.userData.find((user) => user.id === id);
  }
}
