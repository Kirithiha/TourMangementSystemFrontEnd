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
  }

  changePassword(password : any) {
    this.emailId = localStorage.getItem("emailId");
    this.service.checkCredential(this.emailId, password.currentPassword).subscribe((response) => {
      this.jsonObject = JSON.parse(JSON.stringify(response));
      if(this.jsonObject.data) {
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
    },
    (error) => {
      this.jsonObject = JSON.parse(JSON.stringify(error));
      var message = this.jsonObject.error.message;
      window.alert(message);
    });
    
  }
}
