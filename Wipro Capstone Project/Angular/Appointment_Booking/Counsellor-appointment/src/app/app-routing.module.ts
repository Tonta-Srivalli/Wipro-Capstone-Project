import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CounsellorsComponent } from './counsellors/counsellors.component';
import { AuthGuard } from './auth.guard';
import { ShowusersComponent } from './showusers/showusers.component';
import { LogoutComponent } from './logout/logout.component';

import { AdminComponent } from './admin/admin.component';
import { AdminActionsComponent } from './admin-actions/admin-actions.component';
import { RegisterProductComponent } from './register-product/register-product.component';
import { HomeComponent } from './home/home.component';
import { BookSessionComponent } from './book-session/book-session.component';
import { AdminbookingsComponent } from './adminbookings/adminbookings.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { ReviewsComponent } from './reviews/reviews.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: 'book-session', component: BookSessionComponent },
  { path: "register", component: RegisterComponent },
  { path: "counsellors", component: CounsellorsComponent },
  { path: "showusers", component: ShowusersComponent },
  { path: "logout", canActivate: [AuthGuard], component: LogoutComponent },

  { path: "admin", component: AdminComponent },
  { path: "admin-actions", component: AdminActionsComponent },
  { path: "register-product", component: RegisterProductComponent },
  { path: "adminbookings", component: AdminbookingsComponent },
  { path: "my-bookings", component: MyBookingsComponent },
  { path: "reviews/counsellor/:id", component: ReviewsComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
