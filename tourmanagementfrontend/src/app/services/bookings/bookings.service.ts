import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../customer/customer.service';
import { TourPackage } from '../tourPackage/tour-package.service';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  private url : string = "http://localhost:8082/bookings";

  constructor(private http : HttpClient) { }

  save(bookings : Bookings) {
    const newBooking = {
      dateOfTravel : bookings.dateOfTravel,
      travellerCount : bookings.travellerCount,
      customer : {
        id : bookings.customer
      },
      tourPackage : {
        id : bookings.tourPackage
      }
    }
    return this.http.post(this.url+"/create", newBooking);
  }

  getAll() : Observable<Object> {
    return this.http.get(this.url+"/");
  }

  getByCustomer(id : number|undefined) : Observable<Object> {
    return this.http.get(this.url+"/customer/"+id);
  }

  getByPackage(id : number|undefined) : Observable<Object> {
    return this.http.get(this.url+"/package/"+id);
  }

  getPendings() : Observable<Object> {
    return this.http.get(this.url+"/pendings");
  }

  update(id : number|undefined, status : string|undefined) {
    const newBooking = {
      id : id,
      status : status
    }
    return this.http.put(this.url+"/update", newBooking);
  }

  delete(id : number|undefined) {
    return this.http.delete(this.url+"/delete/"+id);
  }
}
 
export class Bookings {
  id?: number;
  dateOfTravel?: Date;
  travellerCount?: number;
  status?: string;
  customer: Customer | any;
  tourPackage: TourPackage | any;
}