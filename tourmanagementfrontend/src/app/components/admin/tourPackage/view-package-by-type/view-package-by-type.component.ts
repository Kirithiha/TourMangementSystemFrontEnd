import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TourPackage, TourPackageService } from 'src/app/services/tourPackage/tour-package.service';
import { Type, TypeService } from 'src/app/services/type/type.service';

@Component({
  selector: 'app-view-package-by-type',
  templateUrl: './view-package-by-type.component.html',
  styleUrls: ['./view-package-by-type.component.css']
})
export class ViewPackageByTypeComponent implements OnInit {

  private jsonObject : any;
  public types : Type[] | undefined;
  public packages : TourPackage[] | undefined;
  public length : number | undefined=0;

  constructor(private typeService : TypeService, private service : TourPackageService, private router : Router) { }

  ngOnInit(): void {
    this.getTypes();
  }

  getTypes() {
    this.typeService.getAllType().subscribe((response) => {
      this.jsonObject = JSON.parse(JSON.stringify(response));
      this.types = this.jsonObject.data;
    },
    (error) => {
      this.jsonObject = JSON.parse(JSON.stringify(error));
      var message = this.jsonObject.error.message;
      window.alert(message);
    });
  }

  getPackages(type : Type) {
    this.service.getPackageByType(type.typeName).subscribe((response) => {
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
