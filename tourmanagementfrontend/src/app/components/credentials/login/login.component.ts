import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login, LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private jsonObject : any;
  private loginCheck : Login|any;

  constructor(private service : LoginService, private router : Router) { }

  ngOnInit(): void {
  }

  login(login : Login) {
    this.service.checkCredential(login.emailId).subscribe((response) => {
      this.jsonObject = JSON.parse(JSON.stringify(response));
      this.loginCheck = this.jsonObject.data;
      if(login.password == this.service.passwordDecrypt(this.loginCheck.password)) {
        if(this.loginCheck.role == "Customer") {
          localStorage.setItem("emailId", this.loginCheck.emailId);
          this.router.navigate(["home"]);
        }
        else if(this.loginCheck.role == "Admin")
          this.router.navigate(["admin"]);
      } else {
        window.alert("Incorrect Password")
      }
    },
    (error) => {
      this.jsonObject = JSON.parse(JSON.stringify(error));
      var message = this.jsonObject.error.message;
      window.alert(message);
    });
  }
}
