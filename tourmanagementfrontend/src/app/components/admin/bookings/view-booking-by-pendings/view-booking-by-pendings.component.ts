import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bookings, BookingsService } from 'src/app/services/bookings/bookings.service';

@Component({
  selector: 'app-view-booking-by-pendings',
  templateUrl: './view-booking-by-pendings.component.html',
  styleUrls: ['./view-booking-by-pendings.component.css']
})
export class ViewBookingByPendingsComponent implements OnInit {

  public bookings : Bookings[] | undefined;
  private jsonObject : any;

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

  getView(id : any) {
    console.log(id);
    if(id == 1) {
      this.router.navigate(["viewbookingbycustomer"]);
    } else if(id == 2) {
      this.router.navigate(["viewbookingbypackage"]);
    }else if(id == 3) {
      this.router.navigate(["viewbookingbypendings"]);
    } else if(id == 4) {
      this.router.navigate(["viewbooking"]);
    }
  }
}
