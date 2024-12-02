import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


declare var jQuery: any;

@Component({
  selector: 'app-showusers',
  templateUrl: './showusers.component.html',
  styleUrls: ['./showusers.component.css']
})
export class ShowusersComponent implements OnInit {

  users: any;
  userObj: any;


  constructor(private service: UserService, private router: Router) {

    this.userObj = { empId: '', empName: '', emailId: '', password: '' };
  }

  ngOnInit() {
    this.service.getAllUsers().subscribe((userData: any) => { this.users = userData; });
  }

  deleteUs(userId: any) {
    this.service.deleteUser(userId).subscribe((data: any) => {
      console.log(data);
    });

    const i = this.users.findIndex((user: any) => {
      return user.userId == userId;
    });

    this.users.splice(i, 1);

  }

  editUser(user: any) {
    this.userObj = user;

    jQuery('#editUser').modal('show');
  }

  updateUs() {
    this.service.updateUser(this.userObj).subscribe((userData: any) => { console.log(userData); });
  }

  logout() {
    this.router.navigate(['/home']);
  }

}
