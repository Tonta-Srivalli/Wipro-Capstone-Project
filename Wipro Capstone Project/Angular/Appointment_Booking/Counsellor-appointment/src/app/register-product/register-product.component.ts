import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.css']
})
export class RegisterProductComponent implements OnInit {

  counsellor: any;
  counsellors: any[] = [];

  constructor(private service: UserService, private router: Router, private toastr: ToastrService) {
    this.counsellor = { counsellorName: '', counsellorImage: '', counsellorDesc: '', counsellorPrice: '' };
  }

  ngOnInit(): void { }

  registerCounsellor(regForm: any) {
    this.counsellor.counsellorName = regForm.counsellorName;
    this.counsellor.counsellorImage = regForm.counsellorImage;
    this.counsellor.counsellorDesc = regForm.counsellorDesc;
    this.counsellor.counsellorPrice = regForm.counsellorPrice;

    this.service.registerCounsellor(this.counsellor).subscribe((result: any) => {
      console.log(result);
      this.counsellors.push(result);
      this.toastr.success('Counsellor added successfully!', 'Success');
    });
  }

  logout() {
    this.router.navigate(['/home']);
  }
}
