import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user.model'  ;
import { UserService } from '../../services/user.service';

@Component({
  selector: 'user',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  name="";
  id=1;
  usersList: any[]=[];

  constructor(
    private userService: UserService,
    private readonly router: Router
  ) {
    this.usersList = [];

  }

  ngOnInit() {
    this.userService.getUsers().subscribe((users: any) => {
      this.usersList = users.data;
    });
  }

  goToProfile(userId: number) {
    this.userService.getUserFromId(userId).subscribe((user: any) => {
      this.id = user.data.id;
    });

    const url = '/profile/' + this.id;
    this.router.navigateByUrl(url);
  }
}
