import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../booking.service';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book-session',
  templateUrl: './book-session.component.html',
  styleUrls: ['./book-session.component.css']
})
export class BookSessionComponent implements OnInit {

  counsellorId: number = 0;
  counsellor: any = {};
  sessionDate: string = '';

  constructor(private bookingService: BookingService
    , private router: Router
    , private activatedRoute: ActivatedRoute
    , private userService: UserService
    , private http: HttpClient) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      const counsellorId = params['counsellorId'];
      console.log('Received Counsellor ID from query params:', counsellorId);

      if (counsellorId) {
        this.counsellorId = +counsellorId;
        this.fetchCounsellorDetails(this.counsellorId);
      } else {
        console.error('Counsellor ID is missing.');
      }
    });
  }


  fetchCounsellorDetails(counsellorId: number) {
    const apiUrl = `http://localhost:8085/counsellors/${counsellorId}`;
    console.log('Fetching details for Counsellor ID:', counsellorId);

    if (!counsellorId) {
      console.error('Invalid counsellor ID:', counsellorId);
      return;
    }

    this.bookingService.getCounsellorDetails(counsellorId).subscribe(
      (data) => {
        console.log('Counsellor details fetched successfully:', data);
        this.counsellor = data;
      },
      (error) => {
        console.error('Failed to fetch counsellor details:', error);
      }
    );
  }

  confirmBooking() {
    const currentUser = this.userService.user;

    if (!currentUser) {
      console.error('User is not logged in.');
      this.router.navigate(['/login']);
      return;
    }

    const booking = {
      userId: currentUser.userId,
      counsellorId: this.counsellor.counsellorId,
      sessionDate: this.sessionDate,
      status: 'Pending'
    };

    this.userService.confirmBooking(booking).subscribe(
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




}
