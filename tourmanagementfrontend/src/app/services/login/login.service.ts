import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url : string = "http://localhost:8082/login";
  private secretKey = "YourSecretKeyForEncryption&Descryption";

  constructor(private http : HttpClient) { }

  save(login : Login) {
    const newLogin = {
      emailId : login.emailId,
      role : login.role,
      password : login.password
    }
    return this.http.post(this.url+"/create", newLogin);
  }

  checkCredential(emailId : string|undefined, password : string|undefined) {
    const login = {
      emailId : emailId,
      password : password
    }
    return this.http.post(this.url+"/checkcredential", login);
  }

  update(emailId : string|undefined, password : string) {
    const updatedLogin = {
      emailId : emailId,
      password : password
    }
    return this.http.put(this.url+"/update", updatedLogin);
  }

  forgotPassword(emailId : string|undefined, password : string) {
    const updatedLogin = {
      emailId : emailId,
      password : password
    }
    return this.http.put(this.url+"/forgotpassword", updatedLogin);
  }
  
  get(emailId : string|undefined) : Observable<Login> {
    return this.http.post(this.url+"/getbyEmail", emailId);
  }
}

export class Login {
  id?: number;
  emailId?: string;
  password?: string|any;
  role?: string;
}