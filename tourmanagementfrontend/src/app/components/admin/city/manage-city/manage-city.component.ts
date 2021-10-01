import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private service : CityService, private stateService : StateService, private router : Router) { }

  ngOnInit(): void {
    this.getAllCities();
    this.getStates();
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

  update(city : City) {
    this.router.navigate(["updatecity"],{state: {city: city}});
  }

  getCityByState(state : State) {
    console.log(state.id);
    this.service.getCityByState(state.id).subscribe((response) => {
      this.jsonObject = JSON.parse(JSON.stringify(response));
      this.cities = this.jsonObject.data;
    },
    (error) => {
      this.jsonObject = JSON.parse(JSON.stringify(error));
      var message = this.jsonObject.error.message;
      window.alert(message);
    });

  }

  getStates() {
    this.stateService.getState().subscribe((response) => {
      this.jsonObject = JSON.parse(JSON.stringify(response));
      this.states = this.jsonObject.data;
    },
    (error) => {
      this.jsonObject = JSON.parse(JSON.stringify(error));
      var message = this.jsonObject.error.message;
      window.alert(message);
    });
  }

  addCity() {
    this.router.navigate(["addcity"]);
  }
}
