import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Login, LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.css']
})
export class PasswordChangeComponent implements OnInit {

  private customer : Login | undefined;
  private emailId : string | any;
  private jsonObject : any;

  constructor(private service : LoginService, private router : Router, private toastr : ToastrService) { }

  ngOnInit(): void {
    this.getDetails();
  }

  getDetails() {
    this.emailId = localStorage.getItem("emailId");
    this.service.checkCredential(this.emailId).subscribe((response) => {
      this.jsonObject = JSON.parse(JSON.stringify(response));
      this.customer = this.jsonObject.data;
      console.log(this.customer);
    },
    (error) => {
      this.jsonObject = JSON.parse(JSON.stringify(error));
      var message = this.jsonObject.error.message;
      window.alert(message);
    });
  }

  changePassword(password : any) {
    if(password.currentPassword == this.service.passwordDecrypt(this.customer?.password)) {
      this.service.update(this.emailId,password.newPassword).subscribe((response) => {
        this.jsonObject = JSON.parse(JSON.stringify(response));
        var msg = this.jsonObject.message;
        this.toastr.success(msg);
        this.router.navigate(["home"]);
      },
      (error) => {
        this.jsonObject = JSON.parse(JSON.stringify(error));
        var message = this.jsonObject.error.message;
        window.alert(message);
      });
    } else {
      this.toastr.info("Current password is incorrect");
    }
  }
}
