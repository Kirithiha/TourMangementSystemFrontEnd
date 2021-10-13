import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Customer, CustomerService } from 'src/app/services/customer/customer.service';
import { Login, LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  private jsonObject : any;
  private loginCheck : Customer | any;

  constructor(private service : LoginService, private customerService : CustomerService, private toastr : ToastrService) { }

  ngOnInit(): void {
  }

  forgot(emailId : any) {
    console.log(emailId);
    this.customerService.getByEmail(emailId.emailId).subscribe((response)=>{
      this.jsonObject = JSON.parse(JSON.stringify(response));
      this.loginCheck = this.jsonObject.data;
      this.service.forgotPassword(this.loginCheck?.emailId, this.loginCheck?.phoneNumber).subscribe((response)=>{
        this.jsonObject = JSON.parse(JSON.stringify(response));
        var message = this.jsonObject.message;
        this.toastr.success(message);
      },
      (error) => {
        this.jsonObject = JSON.parse(JSON.stringify(error));
        var message = this.jsonObject.error.message;
        window.alert(message);
      })
    },
    (error) => {
      this.jsonObject = JSON.parse(JSON.stringify(error));
      var message = this.jsonObject.error.message;
      window.alert(message);
    });
  }
}
