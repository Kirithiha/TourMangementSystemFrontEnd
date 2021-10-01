import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { City, CityService } from 'src/app/services/city/city.service';
import { TourPackage, TourPackageService } from 'src/app/services/tourPackage/tour-package.service';

@Component({
  selector: 'app-manage-package',
  templateUrl: './manage-package.component.html',
  styleUrls: ['./manage-package.component.css']
})
export class ManagePackageComponent implements OnInit {

  public packages : TourPackage[] | undefined;
  private jsonObject : any;
  public cities : City[] | undefined;
  public length : number | any;

  constructor(private cityService : CityService, private service : TourPackageService, private router : Router) { }

  ngOnInit(): void {
    this.getPlaces();
    this.getCities();
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

  getPlaces() {
    this.service.getAllPackage().subscribe((response) => {
      this.jsonObject = JSON.parse(JSON.stringify(response));
      this.packages = this.jsonObject.data;
      this.length = this.packages?.length;
    },
    (error) => {
      this.jsonObject = JSON.parse(JSON.stringify(error));
      var message = this.jsonObject.error.message;
      window.alert(message);
    });
  }

  getView(id : any) {
    if(id == 1) {
      this.router.navigate(["viewpackagebycity"]);
    } else if(id == 2) {
      this.router.navigate(["viewpackagebytype"]);
    } else if(id == 3) {
      this.router.navigate(["viewpackage"]);
    }
  }

  update(packageId : TourPackage) {
    this.router.navigate(["updatepackage"], {state: {package: packageId}})
  }

  delete(id : number|any) {
    this.service.delete(id).subscribe((response) => {
      this.jsonObject = JSON.parse(JSON.stringify(response));
      var message = this.jsonObject.message;
      window.alert(message);
    },
    (error)=>{
      this.jsonObject = JSON.parse(JSON.stringify(error));
      var message = this.jsonObject.error.message;
      window.alert(message);
    });
  }

  getPackageByCity(city : City) {
    this.service.getPackageByCity(city.id).subscribe((response) => {
      this.jsonObject = JSON.parse(JSON.stringify(response));
      this.packages = this.jsonObject.data;
      this.length = this.packages?.length;
    },
    (error) => {
      this.jsonObject = JSON.parse(JSON.stringify(error));
      var message = this.jsonObject.error.message;
      window.alert(message);
    });

  }

  addPackage() {
    this.router.navigate(["managepackage"]);
  }

  view(packageId : any) {
    this.router.navigate(["view"], {state: {package: packageId}})
  }
}
