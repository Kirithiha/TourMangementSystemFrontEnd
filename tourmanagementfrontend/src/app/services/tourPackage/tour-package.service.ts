import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TourPackageService {

  private url : string = "http://localhost:8082/tourpackage";

  constructor(private http : HttpClient) { }

  savePackage(tourpacakge : TourPackage) {
    const newPacakge = {
      name : tourpacakge.name,
      type : tourpacakge.type,
      price : tourpacakge.price,
      overview : tourpacakge.overview,
      imageUrl : tourpacakge.imageUrl,
      plannedDays : tourpacakge.plannedDays,
      city : {
        id : tourpacakge.city
      }
    }
    return this.http.post(this.url+"/create", newPacakge);
  }

  getAllPackage() : Observable<TourPackage> {
    return this.http.get(this.url+"/");
  }

  getPackageByCity(id : number|undefined) : Observable<TourPackage> {
    return this.http.get(this.url+"/city/"+id);
  }

  getPackageByType(type : string|undefined) : Observable<TourPackage> {
    return this.http.get(this.url+"/type/"+type);
  }

  getById(id : number|any) : Observable<TourPackage> {
    return this.http.get(this.url+"/"+id);
  }

  update(tourpacakge : TourPackage) {
    const updatedPackage = {
      id : tourpacakge.id,
      name : tourpacakge.name,
      price : tourpacakge.price,
      overview : tourpacakge.overview,
      type : tourpacakge.type
    }
    return this.http.put(this.url+"/update",updatedPackage);
  }

  delete(id : number|undefined) {
    return this.http.delete(this.url+"/delete/"+id);
  }
}

export class TourPackage {
  id?: number;
  name?: string;
  type?: string;
  price?: number;
  plannedDays?: number;
  overview?: string;
  imageUrl?: string;
  city?: any;
}