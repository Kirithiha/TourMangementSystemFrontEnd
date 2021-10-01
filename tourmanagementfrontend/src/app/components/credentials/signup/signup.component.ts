import { Component, OnInit } from '@angular/core';
import { Customer, CustomerService } from 'src/app/services/customer/customer.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  private jsonObject : any;

  constructor(private service : CustomerService, private loginService : LoginService) { }

  ngOnInit(): void {
  }

  signup(customer : Customer) {
    this.service.save(customer).subscribe((response) => {
      this.jsonObject = JSON.parse(JSON.stringify(response));
      const login = {
        emailId : customer.emailId,
        role : "Customer",
        password : customer.phoneNumber
      }
      this.loginService.save(login).subscribe((response) => {
        this.jsonObject = JSON.parse(JSON.stringify(response));
        window.alert("Register Successfully");
      },
      (error) => {
        this.jsonObject = JSON.parse(JSON.stringify(error));
        var message = this.jsonObject.error.message;
        window.alert(message);
      });
    },
    (error) => {
      this.jsonObject = JSON.parse(JSON.stringify(error));
      var message = this.jsonObject.error.message;
      window.alert(message);
    });
  }
}
