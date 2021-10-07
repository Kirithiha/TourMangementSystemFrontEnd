import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { City, CityService } from 'src/app/services/city/city.service';
import { State, StateService } from 'src/app/services/state/state.service';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.css']
})
export class AddCityComponent implements OnInit {

  private jsonObject : any;
  public states : State[] | undefined;

  constructor(private service : CityService, private stateService : StateService, private router : Router, private toastr : ToastrService) { }

  ngOnInit(): void {
    this.getStates();
  }

  getStates() {
    this.stateService.getState().subscribe((response) => {
      this.jsonObject = JSON.parse(JSON.stringify(response));
      this.states = this.jsonObject.data;
    },
    (error) => {
      this.jsonObject = JSON.parse(JSON.stringify(error));
      var message = this.jsonObject.error.message;
      this.toastr.error(message);
    });
  }

  saveCity(city : City) {
    this.service.saveCity(city).subscribe((response) => {
      this.jsonObject = JSON.parse(JSON.stringify(response));
      var message = this.jsonObject.message;
      this.toastr.success(message);
      this.router.navigate(["managecity"]);
    },
    (error)=>{
      this.jsonObject = JSON.parse(JSON.stringify(error));
      var message = this.jsonObject.error.message;
      this.toastr.error(message);
    });
  }
}
