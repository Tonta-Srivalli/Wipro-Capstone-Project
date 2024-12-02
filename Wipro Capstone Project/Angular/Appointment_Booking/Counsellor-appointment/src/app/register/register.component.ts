
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {


  user: any;


  constructor(private service: UserService, private toastr: ToastrService, private router: Router) {

    this.user = { userId: '', userName: '', emailId: '', password: '' };

  }

  ngOnInit() {

  }

  userRegistration(regForm: any) {
    console.log(regForm);

    this.user.userId = regForm.userId;
    this.user.userName = regForm.userName;
    this.user.emailId = regForm.emailId;
    this.user.password = regForm.password;


    this.service.registerUser(this.user).subscribe((data: any) => {
      console.log(data);
      if (data.success) {
        this.toastr.error('Registration failed.', 'Error');
      } else {
        this.router.navigate(['/login']);
        this.toastr.success('Registration successful.', 'Success');
      }
    });

  }

}
