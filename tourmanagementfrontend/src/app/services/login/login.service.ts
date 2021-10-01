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
      password : this.passwordEncrypt(login.password)
    }
    return this.http.post(this.url+"/create", newLogin);
  }

  checkCredential(emailId : string|undefined) : Observable<Object>{
    return this.http.post(this.url+"/checkcredential", emailId);
  }

  update(emailId : string|undefined, password : string) {
    const updatedLogin = {
      emailId : emailId,
      password : this.passwordEncrypt(password)
    }
    return this.http.put(this.url+"/update", updatedLogin);
  }

  forgotPassword(emailId : string|undefined, password : string) {
    const updatedLogin = {
      emailId : emailId,
      password : this.passwordEncrypt(password)
    }
    return this.http.put(this.url+"/forgotpassword", updatedLogin);
  }
  
  passwordEncrypt(pass : string) {
    return CryptoJS.AES.encrypt(pass, this.secretKey.trim()).toString();
  }

  passwordDecrypt(pass : string) {
    return CryptoJS.AES.decrypt(pass, this.secretKey.trim()).toString(CryptoJS.enc.Utf8)
  }

}

export class Login {
  id?: number;
  emailId?: string;
  password?: string|any;
  role?: string;
}