import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { City, CityService } from 'src/app/services/city/city.service';
import { TourPackage, TourPackageService } from 'src/app/services/tourPackage/tour-package.service';

@Component({
  selector: 'app-view-package-by-city',
  templateUrl: './view-package-by-city.component.html',
  styleUrls: ['./view-package-by-city.component.css']
})
export class ViewPackageByCityComponent implements OnInit {

  private jsonObject : any;
  public cities : City[] | undefined;
  public packages : TourPackage[] | undefined;
  public length : number | undefined=0;

  constructor(private cityService : CityService, private service : TourPackageService, private router : Router) { }

  ngOnInit(): void {
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

  getPackages(city : City) {
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

  getView(id : any) {
    if(id == 1) {
      this.router.navigate(["viewpackagebycity"]);
    } else if(id == 2) {
      this.router.navigate(["viewpackagebytype"]);
    } else if(id == 3) {
      this.router.navigate(["viewpackage"]);
    }
  }

  view(packageId : any) {
    this.router.navigate(["view"], {state: {package: packageId}})
  }

}
