import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getData() {
    let url = "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=110044&date=15-06-2021"
    return this.http.get(url);
  }
}
