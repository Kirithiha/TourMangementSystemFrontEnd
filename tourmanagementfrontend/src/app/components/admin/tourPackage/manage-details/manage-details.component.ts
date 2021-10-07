import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TourPackage, TourPackageService } from 'src/app/services/tourPackage/tour-package.service';

@Component({
  selector: 'app-manage-details',
  templateUrl: './manage-details.component.html',
  styleUrls: ['./manage-details.component.css']
})
export class ManageDetailsComponent implements OnInit {

  public package : TourPackage;
  private jsonObject : any;
  public city : string = "";

  constructor(private router : Router, private service : TourPackageService, private tostr : ToastrService) { 
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as {
      package : TourPackage
    };
    this.package = state.package;
    this.city = this.package.city.rtoCode+"-"+this.package.city.name;
  }

  ngOnInit(): void {
  }

  updatePackage(packageId : TourPackage) {
    packageId.id = this.package.id;
    this.service.update(packageId).subscribe((response) => {
      this.jsonObject = JSON.parse(JSON.stringify(response));
      var message = this.jsonObject.message;
      this.tostr.success(message);
      this.router.navigate(["managepackage"]);
    },
    (error)=>{
      this.jsonObject = JSON.parse(JSON.stringify(error));
      var message = this.jsonObject.error.message;
      window.alert(message);
    });
  }
}
