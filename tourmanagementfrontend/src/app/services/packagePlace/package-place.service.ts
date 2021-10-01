import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PackagePlaceService {

  private url : string = "http://localhost:8082/packageplace";

  constructor(private http : HttpClient) { }

  save(packagePlace : PackagePlace) {
    const newPackagePlace = {
      tourPackage : {
        id : packagePlace.tourPackage
      },
      place : {
        id : packagePlace.place
      }
    }
    return this.http.post(this.url+"/create", newPackagePlace);
  }

  getByPackage(id : number|undefined) : Observable<PackagePlace> {
    return this.http.get(this.url+"/package/"+id);
  }

  delete(id : number|undefined) {
    return this.http.delete(this.url+"/delete/"+id);
  }
}

export class PackagePlace {
  tourPackage?: any;
  place?: any;
}
