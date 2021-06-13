import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpConfigService {
// API path 
base_path = 'http://localhost:3000/employees';

constructor(
  private http: HttpClient
) { }

getListItems(params) {
  console.log(this.base_path + params);
  return this.http.get(this.base_path + params);
}
}
