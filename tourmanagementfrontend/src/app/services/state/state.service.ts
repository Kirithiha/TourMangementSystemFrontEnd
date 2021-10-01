import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private url : string = "http://localhost:8082/state";

  constructor(private http : HttpClient) { }

  saveState(state : State) : Observable<Object> {  
    const newState = {
      code : state.code,
      name : state.name
    }
    return this.http.post(this.url+"/create", newState);
  }

  getState() : Observable<State>{
    return this.http.get(this.url+"/");
  }

  delete(id : number|undefined) {
    return this.http.delete(this.url+"/delete/"+id);
  }

  update(state : State) {
    const updatedState = {
      id : state.id,
      name : state.name
    }
    return this.http.put(this.url+"/update",updatedState);
  }
}

export class State {
  id ?: number;
  code ?: string;
  name ?: string;
}