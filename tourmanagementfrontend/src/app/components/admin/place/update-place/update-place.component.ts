import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Place, PlaceService } from 'src/app/services/place/place.service';

@Component({
  selector: 'app-update-place',
  templateUrl: './update-place.component.html',
  styleUrls: ['./update-place.component.css']
})
export class UpdatePlaceComponent implements OnInit {

  public place : Place;
  private jsonObject : any;
  public city : string = "";

  constructor(private service : PlaceService, private router : Router, private tostr : ToastrService) { 
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
