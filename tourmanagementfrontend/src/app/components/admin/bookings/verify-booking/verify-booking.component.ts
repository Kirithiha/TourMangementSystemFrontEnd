import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bookings, BookingsService } from 'src/app/services/bookings/bookings.service';

@Component({
  selector: 'app-verify-booking',
  templateUrl: './verify-booking.component.html',
  styleUrls: ['./verify-booking.component.css']
})
export class VerifyBookingComponent implements OnInit {

  public bookings : Bookings[] | undefined;
  private jsonObject : any;
  private booking : Bookings | any;

  constructor(private router : Router, private service : BookingsService) { }

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
      window.alert(message);
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
      window.alert(message);
      this.router.navigate(["viewbooking"]);
    },
    (error) => {
      this.jsonObject = JSON.parse(JSON.stringify(error));
      var message = this.jsonObject.error.message;
      window.alert(message);
    });
  }

}
