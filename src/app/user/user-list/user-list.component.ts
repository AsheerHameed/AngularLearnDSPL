import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})

export class ListUsersComponent implements OnInit{
  displayedColumns: string[] = ['firstName', 'lastName','address','dob','editButton',];

  constructor(public dataService: DataService,
    private router: Router  
  ) {
    
  }
  ngOnInit(): void {
  }
  editUser(user: any) {
    this.router.navigate(['/users/edit', user.id]);
  }
  seeUser(user:any){
    this.router.navigate(['/users/user', user.id])
  }
}
