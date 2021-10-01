import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { City, CityService } from 'src/app/services/city/city.service';

@Component({
  selector: 'app-view-city',
  templateUrl: './view-city.component.html',
  styleUrls: ['./view-city.component.css']
})
export class ViewCityComponent implements OnInit {

  private jsonObject : any;
  public cities : City[] | undefined;
  constructor(private service : CityService, private router : Router) { }

  ngOnInit(): void {
    this.getCities();
  }

  getCities() {
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

  getView(id : any) {
    if(id == 1) {
      this.router.navigate(["viewcitybystate"]);
    }
  }
}
