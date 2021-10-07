import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { City, CityService } from 'src/app/services/city/city.service';
import { Place, PlaceService } from 'src/app/services/place/place.service';
import { Type, TypeService } from 'src/app/services/type/type.service';

@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.component.html',
  styleUrls: ['./add-place.component.css']
})
export class AddPlaceComponent implements OnInit {

  public types : Type[] | undefined;
  private jsonObject : any;
  public cities : City[] | undefined;

  constructor(private typeService : TypeService, private cityService : CityService, private service : PlaceService, private router : Router, private tostr : ToastrService) { }

  ngOnInit(): void {
    this.getTypes();
    this.getCities();
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

  savePlace(place : Place) {
    this.service.savePlace(place).subscribe((response) => {
      this.jsonObject = JSON.parse(JSON.stringify(response));
      var message = this.jsonObject.message;
      this.tostr.success(message);
      this.router.navigate(["manageplace"]);
    },
    (error)=>{
      this.jsonObject = JSON.parse(JSON.stringify(error));
      var message = this.jsonObject.error.message;
      window.alert(message);
    });
  }
}
