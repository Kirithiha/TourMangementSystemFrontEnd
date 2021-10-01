import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bookings, BookingsService } from 'src/app/services/bookings/bookings.service';
import { Customer, CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-view-booking-by-customer',
  templateUrl: './view-booking-by-customer.component.html',
  styleUrls: ['./view-booking-by-customer.component.css']
})
export class ViewBookingByCustomerComponent implements OnInit {

  public bookings : Bookings[] | undefined;
  private jsonObject : any;
  public customer : Customer[] | undefined;
  public length : number | any=0;

  constructor(private router : Router, private service : BookingsService, private customerService : CustomerService) { }

  ngOnInit(): void {
    this.getCustomer();
  }

  getCustomer() {
    this.customerService.getAll().subscribe((response) => {
      this.jsonObject = JSON.parse(JSON.stringify(response));
      this.customer = this.jsonObject.data;
    },
    (error) => {
      this.jsonObject = JSON.parse(JSON.stringify(error));
      var message = this.jsonObject.error.message;
      window.alert(message);
    });
  }

  getBookings(customer: Customer) {
    this.service.getByCustomer(customer.id).subscribe((response) => {
      this.jsonObject = JSON.parse(JSON.stringify(response));
      this.bookings = this.jsonObject.data;
      this.length = this.bookings?.length;
    },
    (error) => {
      this.jsonObject = JSON.parse(JSON.stringify(error));
      var message = this.jsonObject.error.message;
      window.alert(message);
    });
  }

  getView(id : any) {
    if(id == 2) {
      this.router.navigate(["viewbookingbypackage"]);
    } else if(id == 3) {
      this.router.navigate(["viewbookingbypendings"]);
    } else if(id == 4) {
      this.router.navigate(["viewbooking"]);
    }
  }
}
