import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-counsellors',
  templateUrl: './counsellors.component.html',
  styleUrls: ['./counsellors.component.css']
})
export class CounsellorsComponent implements OnInit {
  counsellors: any;
  cartCounsellors: any;
  sessionDate: string = '';
  counsellor: any;

  constructor(private service: UserService, private router: Router) {
    this.cartCounsellors = [];
  }

  ngOnInit() {
    this.service.getAllCounsellors().subscribe((data: any) => {
      console.log('API Response:', data);
      this.counsellors = data;
    });
  }

  addToCart(counsellor: any) {
    if (this.service.getUserLoggedStatus()) {
      this.service.addToCart(counsellor);
    } else {
      this.router.navigate(['/login']);
    }
  }

  bookSession(counsellor: any) {
    if (this.service.getUserLoggedStatus()) {
      const counsellorId = counsellor.counsellorId;
      if (!counsellorId) {
        console.error('Counsellor ID is missing. Check the object structure:', counsellor);
        return;
      }
      this.router.navigate(['/book-session'], { queryParams: { counsellorId } });
    } else {
      alert('Please log in to book a session.');
      this.router.navigate(['/login']);
    }
  }

  confirmBooking(counsellor: any) {
    const currentUser = this.service.user;

    if (!currentUser) {
      console.error('User is not logged in.');
      this.router.navigate(['/login']);
      return;
    }

    const booking = {
      userId: currentUser.userId,
      counsellorId: counsellor.id,
      sessionDate: this.sessionDate,
      status: 'Pending'
    };

    this.service.confirmBooking(booking).subscribe(
      (response: any) => {
        console.log('Booking confirmed:', response);
        alert('Session booked successfully. Waiting for admin approval.');
        this.router.navigate(['/my-bookings']);
      },
      (error: any) => {
        console.error('Error while booking session:', error);
        alert('Failed to book session. Please try again.');
      }
    );
  }

  goToMyBookings() {
    if (this.service.getUserLoggedStatus()) {
      this.router.navigate(['/my-bookings']);
    } else {
      alert('Please log in to view your bookings.');
      this.router.navigate(['/login']);
    }
  }

  viewReviews(counsellor: any) {
    if (counsellor && counsellor.counsellorId) {
      this.router.navigate([`/reviews/counsellor/${counsellor.counsellorId}`]);
    } else {
      console.error("Invalid counsellor data.");
    }
  }
}
