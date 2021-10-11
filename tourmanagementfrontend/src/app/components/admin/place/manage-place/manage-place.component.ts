import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { City, CityService } from 'src/app/services/city/city.service';
import { Place, PlaceService } from 'src/app/services/place/place.service';

@Component({
  selector: 'app-manage-place',
  templateUrl: './manage-place.component.html',
  styleUrls: ['./manage-place.component.css']
})
export class ManagePlaceComponent implements OnInit {

  public places : Place[] | undefined;
  private jsonObject : any;
  public cities : City[] | undefined;
  public messageDelete : string = "Are you sure you want to delete it?";
  public title : string = "Confirmation";
  public searchText : any;
  public config : any;

  constructor(private service : PlaceService, private router : Router, private tostr : ToastrService) { }

  ngOnInit(): void {
    this.getPlaces();
  }

  delete(id : number|undefined) {
    this.service.delete(id).subscribe((response) => {
      this.jsonObject = JSON.parse(JSON.stringify(response));
      var message = this.jsonObject.message;
      this.tostr.success(message);
      this.getPlaces();
    },
    (error) => {
      this.jsonObject = JSON.parse(JSON.stringify(error));
      var message = this.jsonObject.error.message;
      window.alert(message);
    });
  }

  update(place : Place) {
    this.router.navigate(["updateplace"],{state: {place: place}});
  }

  getPlaces() {
    this.service.getAllPlace().subscribe((response) => {
      this.jsonObject = JSON.parse(JSON.stringify(response));
      this.places = this.jsonObject.data;
      this.config = { itemsPerPage: 4, currentPage: 1 }
    },
    (error) => {
      this.jsonObject = JSON.parse(JSON.stringify(error));
      var message = this.jsonObject.error.message;
      window.alert(message);
    });
  }

  addPlace() {
    this.router.navigate(["addplace"]);
  }

  pageChanged(event: any) {
    this.config.currentPage = event;
  }
}
