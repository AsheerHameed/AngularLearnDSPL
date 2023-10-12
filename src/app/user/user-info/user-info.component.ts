import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit {
  userId: number | undefined;
  user: any;
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.userId = +params['id']; // Extract the user ID from the route parameters
      this.user = this.dataService.getUserById(this.userId); // Fetch user data by ID
    });
  }
}
