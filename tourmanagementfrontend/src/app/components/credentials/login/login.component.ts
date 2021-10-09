import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Login, LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private jsonObject : any;
  private loginCheck : Login|any;

  constructor(private service : LoginService, private router : Router, private toastr : ToastrService) { }

  ngOnInit(): void {
  }

  login(login : Login) {
    this.service.checkCredential(login.emailId,login.password).subscribe((response) => {
      this.jsonObject = JSON.parse(JSON.stringify(response));
      if(this.jsonObject.data) {
        this.service.get(login.emailId).subscribe((response) => {
          this.jsonObject = JSON.parse(JSON.stringify(response));
          this.loginCheck = this.jsonObject.data;
          if(this.loginCheck.role == "Customer") {
            localStorage.setItem("emailId", this.loginCheck.emailId);
            this.router.navigate(["home"]);
          }
          else if(this.loginCheck.role == "Admin") {
            this.router.navigate(["admin"]);
          } else {
            this.toastr.info("Incorrect Password");
          }
        },
        (error) => {
          this.jsonObject = JSON.parse(JSON.stringify(error));
          var message = this.jsonObject.error.message;
          window.alert(message);
        });
      } else {
        this.toastr.info("Incorrect Password");
      }
    },
    (error) => {
      this.jsonObject = JSON.parse(JSON.stringify(error));
      var message = this.jsonObject.error.message;
      this.toastr.info(message);
    });
  }
}
