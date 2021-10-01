import { getLocalePluralCase } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Place, PlaceService } from 'src/app/services/place/place.service';

@Component({
  selector: 'app-view-place',
  templateUrl: './view-place.component.html',
  styleUrls: ['./view-place.component.css']
})
export class ViewPlaceComponent implements OnInit {

  public places : Place[] | undefined;
  private jsonObject : any;

  constructor(private service : PlaceService, private router : Router) { }

  ngOnInit(): void {
    this.getPlaces();
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

  getView(id : any) {
    if(id == 1) {
      this.router.navigate(["viewplacebycity"]);
    }
  }

}
