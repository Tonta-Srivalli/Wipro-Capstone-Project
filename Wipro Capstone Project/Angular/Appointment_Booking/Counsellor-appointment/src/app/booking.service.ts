import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private apiUrl = 'http://localhost:8085/api/bookings';
  private counsellorApiUrl = 'http://localhost:8085/counsellors';
  private reviewApiUrl = 'http://localhost:8085/api/reviews';

  constructor(private http: HttpClient) { }

  createBooking(booking: any): Observable<any> {
    return this.http.post(this.apiUrl, booking);
  }

  getCounsellorDetails(counsellorId: number): Observable<any> {
    return this.http.get(`${this.counsellorApiUrl}/${counsellorId}`);
  }

  getReviewsForCounsellor(counsellorId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.reviewApiUrl}/counsellor/${counsellorId}`);
  }

  submitReview(review: any): Observable<any> {
    return this.http.post(`${this.reviewApiUrl}/submit`, review);
  }
}
