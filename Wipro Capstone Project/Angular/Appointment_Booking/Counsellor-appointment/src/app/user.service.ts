import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isUserLogged: boolean;
  loginStatus: Subject<any>;
  cartItems: any;
  productToBeAdded: Subject<any>;
  user: any;
  isAdminLogged: boolean;
  adminLoginStatus: Subject<any>
  cartStatus: Subject<any>;

  private baseUrl = 'http://localhost:8085/api';

  constructor(private http: HttpClient) {
    this.isUserLogged = false;
    this.loginStatus = new Subject();
    this.cartItems = [];
    this.productToBeAdded = new Subject();
    this.isAdminLogged = false;
    this.adminLoginStatus = new Subject();
    this.cartStatus = new Subject();
  }


  setUserLoggedIn(user: any) {
    this.isUserLogged = true;
    this.user = user;
    this.loginStatus.next(true);
  }

  getLoginStatus(): any {
    return this.loginStatus.asObservable();
  }

  getUserLoggedStatus(): boolean {
    return this.isUserLogged;
  }

  setUserLogout() {
    this.isUserLogged = false;
    this.loginStatus.next(false);
  }


  getAllUsers(): any {
    return this.http.get('http://localhost:8085/getAllUsers');
  }


  getUser(loginForm: any): any {
    return this.http.get('http://localhost:8085/login/' + loginForm.emailId + "/" + loginForm.password).toPromise();
  }


  deleteUser(userId: any): any {
    return this.http.delete('/deleteUser/' + userId)
  }

  registerUser(user: any) {
    return this.http.post('http://localhost:8085/registerUser', user);
  }

  updateUser(user: any): any {
    return this.http.put('/updateUser', user);
  }

  addToCart(product: any) {
    this.cartItems.push(product);
    this.productToBeAdded.next(product);
  }

  getProductStatus(): any {
    return this.productToBeAdded.asObservable();
  }

  getAllCounsellors(): any {
    return this.http.get('http://localhost:8085/getAllCounsellors');
  }

  registerCounsellor(counsellor: any): any {
    return this.http.post('http://localhost:8085/registerCounsellor', counsellor);
  }

  confirmBooking(booking: any) {
    return this.http.post(`${this.baseUrl}/bookings`, booking);
  }


  getCounsellorDetails(counsellorId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/counsellors/${counsellorId}`);
  }

  getUserId(): number {
    return this.user?.id || 0;
  }

  getAllBookings() {
    return this.http.get(`${this.baseUrl}/all`);
  }

  updateBookingStatus(bookingId: number, status: string) {
    return this.http.put(`${this.baseUrl}/update-status/${bookingId}?status=${status}`, {});
  }

  getUserBookings(userId: number) {
    return this.http.get(`http://localhost:8085/api/bookings/user/${userId}`);
  }

}



