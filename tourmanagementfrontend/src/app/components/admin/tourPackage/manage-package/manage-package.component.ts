import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  public messageDelete : string = "Are you sure you want to delete it?";
  public title : string = "Confirmation";
  public searchText : any;

  constructor(private service : TourPackageService, private router : Router, private tostr : ToastrService) { }

  ngOnInit(): void {
    this.getPlaces();
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

  update(packageId : TourPackage) {
    this.router.navigate(["updatepackage"], {state: {package: packageId}})
  }

  delete(id : number|any) {
    this.service.delete(id).subscribe((response) => {
      this.jsonObject = JSON.parse(JSON.stringify(response));
      var message = this.jsonObject.message;
      this.tostr.success(message);
      this.getPlaces();
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
    this.router.navigate(["addpackage"]);
  }

  view(packageId : any) {
    this.router.navigate(["view"], {state: {package: packageId}})
  }
}
