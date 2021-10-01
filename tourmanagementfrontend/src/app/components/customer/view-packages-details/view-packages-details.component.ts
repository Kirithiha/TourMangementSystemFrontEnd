import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PackageItinerary, PackageItineraryService } from 'src/app/services/packageItinerary/package-itinerary.service';
import { PackagePlace, PackagePlaceService } from 'src/app/services/packagePlace/package-place.service';
import { TourPackage, TourPackageService } from 'src/app/services/tourPackage/tour-package.service';

@Component({
  selector: 'app-view-packages-details',
  templateUrl: './view-packages-details.component.html',
  styleUrls: ['./view-packages-details.component.css']
})
export class ViewPackagesDetailsComponent implements OnInit {

  public itinerary : PackageItinerary[] | undefined;
  public package : TourPackage | undefined;
  public places : PackagePlace[] | undefined;
  private jsonObject : any;
  private id : number | any;
  public days : number | any;
  public nights : number | any;

  constructor(private router : Router, private service : TourPackageService, private itineraryService : PackageItineraryService, private packageService : PackagePlaceService) { 
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as {
      package : number
    };
    this.id = state.package;
    console.log(this.id);
  }

  ngOnInit(): void {
    this.getPackage();
    this.getItinerary();
    this.getPlace();
  }

  getItinerary() {
    this.itineraryService.getByPackage(this.id).subscribe((response) => {
      this.jsonObject = JSON.parse(JSON.stringify(response));
      this.itinerary = this.jsonObject.data;
      this.days = this.itinerary?.length;
      if(this.days != 0) {
        this.nights = this.days - 1;
      }
      console.log(this.itinerary)
    },
    (error) => {
      this.jsonObject = JSON.parse(JSON.stringify(error));
      var message = this.jsonObject.error.message;
      window.alert(message);
    });
  }

  getPlace() {
    this.packageService.getByPackage(this.id).subscribe((response) => {
      this.jsonObject = JSON.parse(JSON.stringify(response));
      this.places = this.jsonObject.data;
      console.log(this.places)
    },
    (error) => {
      this.jsonObject = JSON.parse(JSON.stringify(error));
      var message = this.jsonObject.error.message;
      window.alert(message);
    });
  }

  getPackage() {
    this.service.getById(this.id).subscribe((response) => {
      this.jsonObject = JSON.parse(JSON.stringify(response));
      this.package = this.jsonObject.data;
    },
    (error) => {
      this.jsonObject = JSON.parse(JSON.stringify(error));
      var message = this.jsonObject.error.message;
      window.alert(message);
    });
  }

  booking() {
    console.log(this.id);
    this.router.navigate(["addbooking"], {state: {packageId: this.id}});
  }
}
