import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { AdminserviceService } from '../adminservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminbookings',
  templateUrl: './adminbookings.component.html',
  styleUrls: ['./adminbookings.component.css']
})
export class AdminbookingsComponent {

  bookings: any[] = [];

  constructor(private adminService: AdminserviceService, private router: Router) { }

  ngOnInit() {
    this.loadBookings();
  }

  loadBookings() {
    this.adminService.getAllBookings().subscribe(
      (data: any[]) => {
        this.bookings = data;
      },
      (error) => {
        console.error('Error fetching bookings', error);
      }
    );
  }

  approveBooking(bookingId: number) {
    this.adminService.acceptBooking(bookingId).subscribe(
      () => {
        alert('Booking approved successfully.');
        this.loadBookings();
      },
      (error) => {
        console.error('Error approving booking', error);
      }
    );
  }

  rejectBooking(bookingId: number) {
    this.adminService.rejectBooking(bookingId).subscribe(() => {
      alert('Booking rejected.');
      this.loadBookings();
    });
  }

  logout() {
    this.router.navigate(['/home']);
  }

}
