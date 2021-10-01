import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { City, CityService } from 'src/app/services/city/city.service';
import { PackageItineraryService } from 'src/app/services/packageItinerary/package-itinerary.service';
import { PackagePlaceService } from 'src/app/services/packagePlace/package-place.service';
import { Place, PlaceService } from 'src/app/services/place/place.service';
import { TourPackageService } from 'src/app/services/tourPackage/tour-package.service';
import { Type, TypeService } from 'src/app/services/type/type.service';

@Component({
  selector: 'app-add-package',
  templateUrl: './add-package.component.html',
  styleUrls: ['./add-package.component.css']
})
export class AddPackageComponent implements OnInit {

  public cities : City[] | undefined;
  private jsonObject : any;
  public days : number | undefined;
  public places : Place[] | any;
  public types : Type[] | undefined;
  private itinerary : any=[] ;
  private title : any=[] ;
  private packageId : number | undefined;
  public placeList = new FormControl();

  constructor(private service : TourPackageService, private itineraryService : PackageItineraryService, 
    private typeService : TypeService, private cityService : CityService, private placeService : PlaceService, 
    private packageService : PackagePlaceService, private router : Router) { }

  ngOnInit(): void {
    this.getCities();
    this.getTypes();
  }

  getPlaces(city : any) {
    this.placeService.getPlaceByCity(city).subscribe((response) => {
      this.jsonObject = JSON.parse(JSON.stringify(response));
      this.places = this.jsonObject.data;
      console.log(this.places);
    },
    (error) => {
      this.jsonObject = JSON.parse(JSON.stringify(error));
      var message = this.jsonObject.error.message;
      window.alert(message);
    });
  }

  getCities() {
    this.cityService.getAllCity().subscribe((response) => {
      this.jsonObject = JSON.parse(JSON.stringify(response));
      this.cities = this.jsonObject.data;
    },
    (error) => {
      this.jsonObject = JSON.parse(JSON.stringify(error));
      var message = this.jsonObject.error.message;
      window.alert(message);
    });
  }

  getTypes() {
    this.typeService.getAllType().subscribe((response) => {
      this.jsonObject = JSON.parse(JSON.stringify(response));
      this.types = this.jsonObject.data;
      console.log(this.types);
    },
    (error) => {
      this.jsonObject = JSON.parse(JSON.stringify(error));
      var message = this.jsonObject.error.message;
      window.alert(message);
    });
  }

  savePackage(packagePlace : any) {
    console.log(packagePlace);
    console.log(this.itinerary);
    console.log(this.title);
    this.service.savePackage(packagePlace).subscribe((response) => {
      this.jsonObject = JSON.parse(JSON.stringify(response));
      var message = this.jsonObject.message;
      var splitted = message.split(": "); 
      this.packageId = splitted[1];
      for(let i=0;i<packagePlace.placeList.length;i++) {
        const place = {
          place : packagePlace.placeList[i],
          tourPackage : this.packageId
        }
        this.packageService.save(place).subscribe((response) => {
         
        },
        (error)=>{
          this.jsonObject = JSON.parse(JSON.stringify(error));
          var message = this.jsonObject.error.message;
          window.alert(message);
        });
      }
      this.saveItinerary();
      window.alert(message);
      this.router.navigate(["managepackage"]);
    },
    (error)=>{
      this.jsonObject = JSON.parse(JSON.stringify(error));
      var message = this.jsonObject.error.message;
      window.alert(message);
    });
    for(let i=0;i<this.itinerary.length;i++) {
      console.log(this.itinerary[i]);
    }
  }

  saveItinerary() {
    for(let i=0;i<this.title.length;i++) {
      const itiner = {
        dayNumber : i+1,
        dayPlan : this.itinerary[i],
        title : this.title[i],
        tourPackage : this.packageId
      }
      this.itineraryService.save(itiner).subscribe((response) => {
        
      },
      (error)=>{
        this.jsonObject = JSON.parse(JSON.stringify(error));
        var message = this.jsonObject.error.message;
        window.alert(message);
      });
    }
  }

  getDays(day : any) {
    this.days = day;
  }

  getDesc(dec : any) {
    let str = dec.target.value;
    if(str!=null) {
      this.itinerary.push(str);
    }
  }

  getTitle(title : any) {
    let str = title.target.value;
    if(str != null) {
      this.title.push(str);
    }
  }
}
