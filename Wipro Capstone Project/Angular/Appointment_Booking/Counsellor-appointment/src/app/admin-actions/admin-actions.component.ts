import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-actions',
  templateUrl: './admin-actions.component.html',
  styleUrls: ['./admin-actions.component.css']
})
export class AdminActionsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void { }

  showUsers() {
    this.router.navigate(['/showusers']);
  }

  registerProduct() {
    this.router.navigate(['/register-product']);
  }

  logout() {
    this.router.navigate(['/home']);
  }

  manageBookings() {
    this.router.navigate(['/adminbookings']);
  }
}
