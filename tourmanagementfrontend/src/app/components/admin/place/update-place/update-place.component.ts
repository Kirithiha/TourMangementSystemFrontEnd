import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Place, PlaceService } from 'src/app/services/place/place.service';

@Component({
  selector: 'app-update-place',
  templateUrl: './update-place.component.html',
  styleUrls: ['./update-place.component.css']
})
export class UpdatePlaceComponent implements OnInit {

  public place : Place | any;
  private jsonObject : any;
  public city : string | undefined;

  constructor(private service : PlaceService, private router : Router) { 
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as {
      place : Place
    };
    this.place = state.place;
    this.city = this.place.city.rtoCode+"-"+this.place.city.name;
  }

  ngOnInit(): void {
  }

  updatePlace(place : Place) {
    this.service.update(place).subscribe((response) => {
      this.jsonObject = JSON.parse(JSON.stringify(response));
      var message = this.jsonObject.message;
      window.alert(message);
      this.router.navigate(["manageplace"]);
    },
    (error)=>{
      this.jsonObject = JSON.parse(JSON.stringify(error));
      var message = this.jsonObject.error.message;
      window.alert(message);
    });
  }

}
