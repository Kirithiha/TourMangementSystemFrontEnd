import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bookings, BookingsService } from 'src/app/services/bookings/bookings.service';
import { TourPackage, TourPackageService } from 'src/app/services/tourPackage/tour-package.service';

@Component({
  selector: 'app-view-booking-by-package',
  templateUrl: './view-booking-by-package.component.html',
  styleUrls: ['./view-booking-by-package.component.css']
})
export class ViewBookingByPackageComponent implements OnInit {

  public bookings : Bookings[] | undefined;
  private jsonObject : any;
  public packages : TourPackage[] | undefined;
  public length : number | any=0;

  constructor(private router : Router, private service : BookingsService, private packageService : TourPackageService) { }

  ngOnInit(): void {
    this.getPackages();
  }

  getPackages() {
    this.packageService.getAllPackage().subscribe((response) => {
      this.jsonObject = JSON.parse(JSON.stringify(response));
      this.packages = this.jsonObject.data;
    },
    (error) => {
      this.jsonObject = JSON.parse(JSON.stringify(error));
      var message = this.jsonObject.error.message;
      window.alert(message);
    });
  }

  getBookings(packageId: TourPackage) {
    console.log(packageId.id);
    this.service.getByPackage(packageId.id).subscribe((response) => {
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

  getView(id : any) {
    if(id == 1) {
      this.router.navigate(["viewbookingbycustomer"]);
    } else if(id == 3) {
      this.router.navigate(["viewbookingbypendings"]);
    } else if(id == 4) {
      this.router.navigate(["viewbooking"]);
    }
  }

}
