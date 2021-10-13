import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PackageItinerary, PackageItineraryService } from 'src/app/services/packageItinerary/package-itinerary.service';

@Component({
  selector: 'app-update-itinerary',
  templateUrl: './update-itinerary.component.html',
  styleUrls: ['./update-itinerary.component.css']
})
export class UpdateItineraryComponent implements OnInit {

  public itinerary : PackageItinerary;
  private jsonObject : any;

  constructor(private router : Router, private service : PackageItineraryService, private tostr : ToastrService) { 
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as {
      itinerary : PackageItinerary
    };
    this.itinerary = state.itinerary;
  }

  ngOnInit(): void {
  }

  update(itir : PackageItinerary) {
    itir.id = this.itinerary.id;
    this.service.update(itir).subscribe((response) => {
      this.jsonObject = JSON.parse(JSON.stringify(response));
      var message = this.jsonObject.message;
      this.tostr.success(message);
      this.router.navigate(["managepackage"]);
    },
    (error)=>{
      this.jsonObject = JSON.parse(JSON.stringify(error));
      var message = this.jsonObject.error.message;
      window.alert(message);
    });
  }
}
