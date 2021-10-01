import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  private url : string = "http://localhost:8082/type";

  constructor(private http : HttpClient) { }

  saveType(type : Type) {
    const newType = {
      typeName : type.typeName
    }
    return this.http.post(this.url+"/create", newType);
  }

  getAllType() : Observable<Type> {
    return this.http.get(this.url+"/");
  }

  delete(id : number|undefined) {
    return this.http.delete(this.url+"/delete/"+id);
  }
}

export class Type {
  id?: number;
  typeName?: string;
}
