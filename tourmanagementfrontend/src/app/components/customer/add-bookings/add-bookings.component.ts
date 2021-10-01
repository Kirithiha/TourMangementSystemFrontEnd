import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingsService } from 'src/app/services/bookings/bookings.service';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-add-bookings',
  templateUrl: './add-bookings.component.html',
  styleUrls: ['./add-bookings.component.css']
})
export class AddBookingsComponent implements OnInit {

  private packageId : number | any;
  private customerId : number | any;
  private emailId : string | any;
  private jsonObject : any;

  constructor(private router : Router, private customerService : CustomerService, private service : BookingsService) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as {
      packageId : number
    };
    this.packageId = state.packageId;
    console.log(this.packageId);
   }

  ngOnInit(): void {
    this.getCustomer();
  }

  getCustomer() {
    this.emailId = localStorage.getItem("emailId");
    this.customerService.getByEmail(this.emailId).subscribe((response) => {
      this.jsonObject = JSON.parse(JSON.stringify(response));
      var customer = this.jsonObject.data;
      this.customerId = customer.id;
      console.log(this.customerId)
    },
    (error) => {
      this.jsonObject = JSON.parse(JSON.stringify(error));
      var message = this.jsonObject.error.message;
      window.alert(message);
    });
  }

  book(book : any) {
    const booking = {
      customer : this.customerId,
      tourPackage : this.packageId,
      travellerCount : book.travellerCount,
      dateOfTravel : book.dateOfTravel 
    }
    this.service.save(booking).subscribe((response) => {
      window.alert("Booking added Successfully. Further Approval status will be communicated through mail");
      this.router.navigate(["home"]);
    },
    (error) => {
      this.jsonObject = JSON.parse(JSON.stringify(error));
      var message = this.jsonObject.error.message;
      window.alert(message);
    });
  }
}
