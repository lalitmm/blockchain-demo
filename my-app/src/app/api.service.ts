import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { MoveMoneyRequest } from './movemoney/move-money-action.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = '/demo/blockchain/transfer-money';
  constructor(private http: HttpClient) { }

  public transferMoney( moveMoneyRequest: MoveMoneyRequest){
    return this.http.post(`${this.apiURL}`, moveMoneyRequest); 
  }

}
