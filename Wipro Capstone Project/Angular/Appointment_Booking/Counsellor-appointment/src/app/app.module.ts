import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { CounsellorsComponent } from './counsellors/counsellors.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LogoutComponent } from './logout/logout.component';
import { ShowusersComponent } from './showusers/showusers.component';

import { AdminComponent } from './admin/admin.component';
import { AdminActionsComponent } from './admin-actions/admin-actions.component';
import { RegisterProductComponent } from './register-product/register-product.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { BookSessionComponent } from './book-session/book-session.component';
import { AdminbookingsComponent } from './adminbookings/adminbookings.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { ReviewsComponent } from './reviews/reviews.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CounsellorsComponent,
    HeaderComponent,
    LogoutComponent,
    ShowusersComponent,

    AdminComponent,
    AdminActionsComponent,
    RegisterProductComponent,
    HomeComponent,
    BookSessionComponent,
    AdminbookingsComponent,
    MyBookingsComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, RouterModule, HttpClientModule,
    ToastrModule.forRoot(), BrowserAnimationsModule

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
