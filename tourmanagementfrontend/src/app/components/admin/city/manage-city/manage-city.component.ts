import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { City, CityService } from 'src/app/services/city/city.service';
import { State, StateService } from 'src/app/services/state/state.service';

@Component({
  selector: 'app-manage-city',
  templateUrl: './manage-city.component.html',
  styleUrls: ['./manage-city.component.css']
})
export class ManageCityComponent implements OnInit {

  public cities : City[] | undefined;
  private jsonObject : any;
  public states : State[] | undefined;
  public popoverMessage : string = "Are you sure you want to delete it?";
  public title : string = "Delete confirmation";
  public searchText : any;

  constructor(private service : CityService, private router : Router, private tostr : ToastrService) { }

  ngOnInit(): void {
    this.getAllCities();
  }

  getAllCities() {
    this.service.getAllCity().subscribe((response) => {
      this.jsonObject = JSON.parse(JSON.stringify(response));
      this.cities = this.jsonObject.data;
    },
    (error) => {
      this.jsonObject = JSON.parse(JSON.stringify(error));
      var message = this.jsonObject.error.message;
      window.alert(message);  
    });
  }

  delete(id : number|any) {
    console.log(id);
    this.service.delete(id).subscribe((response) => {
      this.jsonObject = JSON.parse(JSON.stringify(response));
      var message = this.jsonObject.message;
      this.tostr.success(message);
      this.getAllCities();
    },
    (error) => {
      this.jsonObject = JSON.parse(JSON.stringify(error));
      var message = this.jsonObject.error.message;
      window.alert(message);
    });
  }

  update(city : City) {
    this.router.navigate(["updatecity"],{state: {city: city}});
  }

  addCity() {
    this.router.navigate(["addcity"]);
  }
}
