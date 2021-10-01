import { Component, OnInit } from '@angular/core';
import { Bookings, BookingsService } from 'src/app/services/bookings/bookings.service';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-view-bookings-customer',
  templateUrl: './view-bookings-customer.component.html',
  styleUrls: ['./view-bookings-customer.component.css']
})
export class ViewBookingsCustomerComponent implements OnInit {

  public bookings : Bookings[] | undefined;
  public length : number | undefined;
  private emailId : string | any;
  private jsonObject : any;
  private customerId : number | undefined;
  
  constructor(private service : BookingsService, private customerService : CustomerService) { }

  ngOnInit(): void {
    this.getCustomer();
  }

  getCustomer() {
    this.emailId = localStorage.getItem("emailId");
    this.customerService.getByEmail(this.emailId).subscribe((response) => {
      this.jsonObject = JSON.parse(JSON.stringify(response));
      var customer = this.jsonObject.data;
      this.customerId = customer.id;
      this.getBooking();
    },
    (error) => {
      this.jsonObject = JSON.parse(JSON.stringify(error));
      var message = this.jsonObject.error.message;
      console.log("cust");
      window.alert(message);
    });
  }

  getBooking() {
    this.service.getByCustomer(this.customerId).subscribe((response) => {
      this.jsonObject = JSON.parse(JSON.stringify(response));
      this.bookings = this.jsonObject.data;
      this.length = this.bookings?.length;
      console.log(this.bookings);
    },
    (error) => {
      this.jsonObject = JSON.parse(JSON.stringify(error));
      var message = this.jsonObject.error.message;
      window.alert(message);
    });
  }

}
