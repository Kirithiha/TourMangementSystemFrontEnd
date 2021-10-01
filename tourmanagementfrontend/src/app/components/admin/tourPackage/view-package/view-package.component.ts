import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TourPackage, TourPackageService } from 'src/app/services/tourPackage/tour-package.service';

@Component({
  selector: 'app-view-package',
  templateUrl: './view-package.component.html',
  styleUrls: ['./view-package.component.css']
})
export class ViewPackageComponent implements OnInit {

  public packages : TourPackage[] | undefined;
  private jsonObject : any;

  constructor(private service : TourPackageService, private router : Router) { }

  ngOnInit(): void {
    this.getPlaces();
  }

  getPlaces() {
    this.service.getAllPackage().subscribe((response) => {
      this.jsonObject = JSON.parse(JSON.stringify(response));
      this.packages = this.jsonObject.data;
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
