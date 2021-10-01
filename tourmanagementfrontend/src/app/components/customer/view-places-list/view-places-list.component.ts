import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Place, PlaceService } from 'src/app/services/place/place.service';

@Component({
  selector: 'app-view-places-list',
  templateUrl: './view-places-list.component.html',
  styleUrls: ['./view-places-list.component.css']
})
export class ViewPlacesListComponent implements OnInit {

  public places : Place[] | undefined;
  private jsonObject : any;
  private id : number | any;

  constructor(private router : Router, private service : PlaceService) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as {
      placeId : number
    };
    this.id = state.placeId;
    console.log(this.id);
   }

  ngOnInit(): void {
    this.getPlaces();
  }

  getPlaces() {
    this.service.getPlaceByCity(this.id).subscribe((response) => {
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
}
