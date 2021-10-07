import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Bookings, BookingsService } from 'src/app/services/bookings/bookings.service';

@Component({
  selector: 'app-verify-booking',
  templateUrl: './verify-booking.component.html',
  styleUrls: ['./verify-booking.component.css']
})
export class VerifyBookingComponent implements OnInit {

  public bookings : Bookings[] | undefined;
  private jsonObject : any;
  public messageApprove : string = "Are you sure you want to approve it?";
  public messageDelete : string = "Are you sure you want to deny it?";
  public title : string = "Confirmation";
  public searchText : any;

  constructor(private router : Router, private service : BookingsService, private tostr : ToastrService) { }

  ngOnInit(): void {
    this.getBookings();
  }

  getBookings() {
    this.service.getPendings().subscribe((response) => {
      this.jsonObject = JSON.parse(JSON.stringify(response));
      this.bookings = this.jsonObject.data;
    },
    (error) => {
      this.jsonObject = JSON.parse(JSON.stringify(error));
      var message = this.jsonObject.error.message;
      window.alert(message);
    });
  }

  approve(bookId : number|any) {
    this.service.update(bookId, "Approved").subscribe((response) => {
      this.jsonObject = JSON.parse(JSON.stringify(response));
      var message = this.jsonObject.message;
      this.tostr.success(message);
      this.router.navigate(["viewbooking"]);
    },
    (error) => {
      this.jsonObject = JSON.parse(JSON.stringify(error));
      var message = this.jsonObject.error.message;
      window.alert(message);
    });
  }

  deny(id : number|any) {
    this.service.update(id, "Denied").subscribe((response) => {
      this.jsonObject = JSON.parse(JSON.stringify(response));
      var message = this.jsonObject.error.message;
      this.tostr.success(message);
      this.router.navigate(["viewbooking"]);
    },
    (error) => {
      this.jsonObject = JSON.parse(JSON.stringify(error));
      var message = this.jsonObject.error.message;
      window.alert(message);
    });
  }

}
