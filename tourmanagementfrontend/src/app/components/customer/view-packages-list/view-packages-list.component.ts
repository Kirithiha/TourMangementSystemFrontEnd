import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TourPackage, TourPackageService } from 'src/app/services/tourPackage/tour-package.service';

@Component({
  selector: 'app-view-packages-list',
  templateUrl: './view-packages-list.component.html',
  styleUrls: ['./view-packages-list.component.css']
})
export class ViewPackagesListComponent implements OnInit {

  public packages : TourPackage[] | undefined;
  private jsonObject : any;
  private id : number | any;

  constructor(private router : Router, private service : TourPackageService) { 
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as {
      packageId : number
    };
    this.id = state.packageId;
  }

  ngOnInit(): void {
    this.getPackages();
  }

  getPackages() {
    this.service.getPackageByCity(this.id).subscribe((response) => {
      this.jsonObject = JSON.parse(JSON.stringify(response));
      this.packages = this.jsonObject.data;
      console.log(this.packages);
    },
    (error) => {
      this.jsonObject = JSON.parse(JSON.stringify(error));
      var message = this.jsonObject.error.message;
      window.alert(message);
    });
  }

  view(packageId : any) {
    this.router.navigate(["viewpackagedetails"], {state: {package: packageId}})
  }
}
