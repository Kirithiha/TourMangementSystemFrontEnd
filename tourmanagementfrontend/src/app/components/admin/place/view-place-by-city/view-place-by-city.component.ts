import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { City, CityService } from 'src/app/services/city/city.service';
import { Place, PlaceService } from 'src/app/services/place/place.service';

@Component({
  selector: 'app-view-place-by-city',
  templateUrl: './view-place-by-city.component.html',
  styleUrls: ['./view-place-by-city.component.css']
})
export class ViewPlaceByCityComponent implements OnInit {

  public places : Place[] | undefined;
  private jsonObject : any;
  public cities : City[] | undefined;

  constructor(private service : PlaceService, private router : Router, private cityService : CityService) { }

  ngOnInit(): void {
    this.getCities();
  }

  getCities() {
    this.cityService.getAllCity().subscribe((response) => {
      this.jsonObject = JSON.parse(JSON.stringify(response));
      this.cities = this.jsonObject.data;
      console.log(this.places);
    },
    (error) => {
      this.jsonObject = JSON.parse(JSON.stringify(error));
      var message = this.jsonObject.error.message;
      window.alert(message);
    });
  }

  getPlaces(city : City) {
    this.service.getPlaceByCity(city.id).subscribe((response) => {
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

  getView(id : any) {
    if(id == 2) {
      this.router.navigate(["viewplace"]);
    }
  }

}
