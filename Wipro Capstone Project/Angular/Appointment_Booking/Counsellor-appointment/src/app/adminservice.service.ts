import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  private baseUrl = 'http://localhost:8085/api/admin/bookings';

  constructor(private http: HttpClient) { }

  getAllBookings(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/all`);
  }

  acceptBooking(bookingId: number): Observable<any> {
    return this.http.put(`${this.baseUrl}/accept/${bookingId}`, {});
  }

  rejectBooking(bookingId: number): Observable<any> {
    return this.http.put(`${this.baseUrl}/reject/${bookingId}`, {});
  }

}
