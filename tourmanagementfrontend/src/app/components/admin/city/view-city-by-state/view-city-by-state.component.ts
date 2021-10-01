import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { City, CityService } from 'src/app/services/city/city.service';
import { State, StateService } from 'src/app/services/state/state.service';

@Component({
  selector: 'app-view-city-by-state',
  templateUrl: './view-city-by-state.component.html',
  styleUrls: ['./view-city-by-state.component.css']
})
export class ViewCityByStateComponent implements OnInit {

  public cities : City[] | undefined;
  public states : State[] | undefined;
  private jsonObject : any;

  constructor(private stateService : StateService, private service : CityService, private router : Router) { }

  ngOnInit(): void {
    this.getStates();
  }

  getCities(state : State) {
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

  getView(id : any) {
    if(id == 2) {
      this.router.navigate(["viewcity"]);
    }
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
}
