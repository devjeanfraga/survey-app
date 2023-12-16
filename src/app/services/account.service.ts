import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account, AccountLogin, AccountResponse, AddAccountData } from '../share/account/account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  accesstoken!:string; 
  private readonly url:string = "http://18.225.37.219:5050/survey-api";

  constructor( private httpClient: HttpClient ) {}

  resgister (addAccountData: AddAccountData): Observable<AccountResponse> {
    return this.httpClient.post<AccountResponse>(`${this.url}/signup`, addAccountData);
  };

  login (credentials: AccountLogin): Observable<Account> {
    return this.httpClient.post<Account>(`${this.url}/login`, credentials)
  };

  getApi () {
    return this.httpClient.get(this.url).subscribe(data =>  console.log(data));
  }


}
