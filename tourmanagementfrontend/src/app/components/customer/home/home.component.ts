import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { City, CityService } from 'src/app/services/city/city.service';
import { State, StateService } from 'src/app/services/state/state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public cities : City[] | undefined;
  public states : State[] | undefined;
  private jsonObject : any;

  constructor(private cityService : CityService, private stateService : StateService, private router : Router) { }

  ngOnInit(): void {
    this.getStates();
  }

  getCities(state : number|any) {
    this.cityService.getCityByState(state).subscribe((response) => {
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

  place(id : number|any) {
    console.log("Places"+id);
    this.router.navigate(["viewplaceslist"], {state: {placeId: id}});
  }

  package(id : number|any) {
    console.log(id);
    this.router.navigate(["viewpackageslist"], {state: {packageId: id}});
  }

}
