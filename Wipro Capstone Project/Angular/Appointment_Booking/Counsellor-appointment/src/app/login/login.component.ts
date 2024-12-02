import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoggedIn = false;
  user: any;


  constructor(private router: Router, private service: UserService) { }

  ngOnInit() {
  }

  async login(loginForm: any) {
    console.log(loginForm);

    if (loginForm.emailId === 'admin' && loginForm.password === 'admin') {
      alert('Welcome admin');
      this.isLoggedIn = true;
      this.service.setUserLoggedIn(null);
      this.router.navigate(['showusers']);
    } else {
      await this.service.getUser(loginForm).then((userData: any) => {
        this.user = userData;

        console.log(userData);
      });

      if (this.user != null) {
        this.isLoggedIn = true;
        this.service.setUserLoggedIn(this.user);
        this.router.navigate(['counsellors']);
      } else {
        alert("Invalid Credentials")
        this.isLoggedIn = false;
        this.router.navigate(['login']);
      }
    }
  }
  registerPage() {
    this.router.navigate(['/register']);
  }
}
