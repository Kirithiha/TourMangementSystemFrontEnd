import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private url : string = "http://localhost:8082/city";

  constructor(private http : HttpClient) { }

  saveCity(city : City) {
    const newCity = {
      rtoCode : city.rtoCode,
      name : city.name,
      state : {
        id : city.state
      }
    }
    return this.http.post(this.url+"/create", newCity);
  }

  getAllCity() : Observable<City> {
    return this.http.get(this.url+"/");
  }

  getCityByState(id : number|undefined) : Observable<City> {
    return this.http.get(this.url+"/state/"+id);
  }

  delete(id : number|undefined) {
    return this.http.delete(this.url+"/delete/"+id);
  }

  update(city : City) {
    const updatedCity = {
      id : city.id,
      name : city.name
    }
    return this.http.put(this.url+"/update",updatedCity);
  }

  getCityByCode(rtoCode : string|undefined) : Observable<City> {
    return this.http.get(this.url+"/rtocode/"+rtoCode);
  }
}

export class City {
  id ?: number;
  rtoCode ?: string;
  name ?: string;
  state ?: any;
}