import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  async login(loginForm: any) {
    console.log(loginForm);

    if (loginForm.emailId === 'admin' && loginForm.password === 'admin') {
      alert('Welcome to admin Page..');
      this.router.navigate(['admin-actions']);
    } else {
      const newLocal = "Wrong Credentials !";
      alert(newLocal);
    }
  }

}
