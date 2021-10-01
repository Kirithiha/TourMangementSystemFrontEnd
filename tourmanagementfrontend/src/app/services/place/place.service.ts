import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../city/city.service';


@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  private url : string = "http://localhost:8082/place";

  constructor(private http : HttpClient) { }

  savePlace(place : Place) {
    const newPlace = {
      name : place.name,
      type : place.type,
      imageUrl : place.imageUrl,
      description : place.description,
      city : {
        id : place.city
      }
    }
    return this.http.post(this.url+"/create", newPlace);
  }

  getAllPlace() : Observable<Place> {
    return this.http.get(this.url+"/");
  }

  getPlaceByCity(id : number|undefined) : Observable<Place> {
    return this.http.get(this.url+"/city/"+id);
  }

  update(place : Place) {
    const updatedPlace = {
      id : place.id,
      name : place.name,
      description : place.description
    }
    return this.http.put(this.url+"/update",updatedPlace);
  }

  delete(id : number|undefined) {
    return this.http.delete(this.url+"/delete/"+id);
  }

}

export class Place {
   id?: number;
   name?: string;
   type?: string;
   imageUrl?: string;
   description?: string;
   city?: any;
}
