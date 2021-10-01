import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { City, CityService } from 'src/app/services/city/city.service';
import { Place, PlaceService } from 'src/app/services/place/place.service';

@Component({
  selector: 'app-manage-place',
  templateUrl: './manage-place.component.html',
  styleUrls: ['./manage-place.component.css']
})
export class ManagePlaceComponent implements OnInit {

  public places : Place[] | undefined;
  private jsonObject : any;
  public cities : City[] | undefined;

  constructor(private service : PlaceService, private router : Router, private cityService : CityService) { }

  ngOnInit(): void {
    this.getCities();
    this.getPlaces();
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

  getPlaceByCity(city : City) {
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

  delete(id : number|undefined) {
    this.service.delete(id).subscribe((response) => {
      this.jsonObject = JSON.parse(JSON.stringify(response));
      var message = this.jsonObject.message;
      window.alert(message);
      window.location.reload();
    },
    (error) => {
      this.jsonObject = JSON.parse(JSON.stringify(error));
      var message = this.jsonObject.error.message;
      window.alert(message);
    });
  }

  update(place : Place) {
    this.router.navigate(["updateplace"],{state: {place: place}});
  }

  getPlaces() {
    this.service.getAllPlace().subscribe((response) => {
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

  addPlace() {
    this.router.navigate(["addplace"]);
  }
}
