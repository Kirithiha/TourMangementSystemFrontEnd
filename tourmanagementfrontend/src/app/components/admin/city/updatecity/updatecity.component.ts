import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { City, CityService } from 'src/app/services/city/city.service';

@Component({
  selector: 'app-updatecity',
  templateUrl: './updatecity.component.html',
  styleUrls: ['./updatecity.component.css']
})
export class UpdatecityComponent implements OnInit {

  public city : City | any;
  private jsonObject : any;
  public state : string | undefined;

  constructor(private router : Router, private service : CityService) { 
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as {
      city : City
    };
    this.city = state.city;
    this.state = this.city.state.code+"-"+this.city.state.name;
  }

  ngOnInit(): void {
    console.log(this.city);
    console.log(this.state);
  }

  updateCity(city : City) {
    this.service.update(city).subscribe((response) => {
      this.jsonObject = JSON.parse(JSON.stringify(response));
      var message = this.jsonObject.message;
      window.alert(message);
      this.router.navigate(["managecity"]);
    },
    (error)=>{
      this.jsonObject = JSON.parse(JSON.stringify(error));
      var message = this.jsonObject.error.message;
      window.alert(message);
    });
  }
}
