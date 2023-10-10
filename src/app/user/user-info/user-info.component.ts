import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  user: User | undefined;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    // Retrieve the 'id' parameter from the route
    const idParam = this.route.snapshot.paramMap.get('id');
    
    if (idParam !== null) {
      // Use the 'idParam' to fetch the user's data from your service
      this.user = this.userService.getUserById(idParam);
    }
  }
}
