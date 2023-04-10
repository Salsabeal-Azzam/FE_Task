import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DealsService {

  baseUrl:string = "https://my-json-server.typicode.com/mabukoush1/contacts/db"
  jsonServer:string ="http://localhost:3000/deals"
  constructor(private _HttpClient:HttpClient) {}

  getAllDeals():Observable<any>{
    // return this._HttpClient.get(this.baseUrl ,{observe:"body"})
    return this._HttpClient.get(this.jsonServer ,{observe:"body"})
  }

  updateStatus(id:any , deal:any):Observable<any>{
    return this._HttpClient.put(`${this.jsonServer}/${id}`,deal);
  };
}
