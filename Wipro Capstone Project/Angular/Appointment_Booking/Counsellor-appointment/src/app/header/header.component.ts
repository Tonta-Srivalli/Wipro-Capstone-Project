import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  cartItems: any[];

  constructor(private service: UserService) {
    this.cartItems = [];
  }

  ngOnInit() {
    this.service.getLoginStatus().subscribe((loginStatusData: boolean) => {
      this.isLoggedIn = loginStatusData;
    });

    this.service.getProductStatus().subscribe((productData: any) => {
      this.cartItems = productData;
    });
  }
}
