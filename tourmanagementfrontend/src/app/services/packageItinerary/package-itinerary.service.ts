import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TourPackage } from '../tourPackage/tour-package.service';

@Injectable({
  providedIn: 'root'
})
export class PackageItineraryService {

  private url : string = "http://localhost:8082/itinerary";

  constructor(private http : HttpClient) { }

  save(itinerary : PackageItinerary) {
    const newItinerary = {
      dayNumber : itinerary.dayNumber,
      dayPlan : itinerary.dayPlan,
      title : itinerary.title,
      tourPackage : {
        id : itinerary.tourPackage
      }
    }
    return this.http.post(this.url+"/create", newItinerary);
  }

  getByPackage(id : number|undefined) : Observable<Object> {
    return this.http.get(this.url+"/package/"+id);
  }

  update(itinerary : PackageItinerary) {
    const updatedItinerary = {
      id : itinerary.id,
      dayNumber : itinerary.dayNumber,
      dayPlan : itinerary.dayPlan,
      title : itinerary.title
    }
    return this.http.put(this.url+"/update", updatedItinerary);
  }
}

export class PackageItinerary {
  id?: number;
  dayNumber?: number;
  dayPlan?: string;
  title?: string;
  tourPackage: TourPackage | any;
}