import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css']
})
export class MyBookingsComponent {

  bookings: any[] = [];

  constructor(private service: UserService) { }

  ngOnInit() {
    const currentUser = this.service.user;
    if (currentUser) {
      this.service.getUserBookings(currentUser.userId).subscribe(
        (data: any) => {
          this.bookings = data;
        },
        (error: any) => {
          console.error('Error fetching bookings:', error);
        }
      );
    }
  }

}
