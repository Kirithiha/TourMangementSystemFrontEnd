import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private url : string = "http://localhost:8082/customer";

  constructor(private http : HttpClient) { }

  save(customer : Customer) {
    const newCustomer = {
      name : customer.name,
      emailId : customer.emailId,
      phoneNumber : customer.phoneNumber
    }
    return this.http.post(this.url+"/create", newCustomer);
  }

  getByEmail(id : string|undefined) : Observable<Object> {
    return this.http.get(this.url+"/email/"+id);
  }

  getAll() : Observable<Object> {
    return this.http.get(this.url+"/");
  }

  update(customer : Customer) {
    const newCustomer = {
      id : customer.id,
      name : customer.name,
      phoneNumber : customer.phoneNumber
    }
    return this.http.put(this.url+"/update", newCustomer);
  }

  delete(id : number|undefined) {
    return this.http.delete(this.url+"/delete/"+id);
  }

}

export class Customer {
  id?: number;
  emailId?: string;
  name?: string;
  phoneNumber?: number;
}