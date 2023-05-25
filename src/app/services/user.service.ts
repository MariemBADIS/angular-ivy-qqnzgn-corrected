import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../models/account.model';
import { Person } from '../models/person.model';
import { UserApi } from '../models/user-api.model';
import { UsersListApi } from '../models/users-list-api.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(@Inject('apiUrl') private apiUrl:string, private http: HttpClient) {
   // this.apiUrl="https://reqres.in/api" ;
  }

  public getUsers(): Observable<UsersListApi> {
    return this.http.get<any>(`${this.apiUrl}/users`);
  }

  public getUserFromId(userId:number): Observable<UserApi> {
    return this.http.get<any>(`${this.apiUrl}/users/${userId}`);
  }

  private getAccountFromId(accountId: number): Observable<Account> {
    return this.http.get<Account>(`${this.apiUrl}${accountId}`);
  }

  private getPersonFromId(personId: number): Observable<Person> {
    return this.http.get<Person>(`${this.apiUrl}${personId}`);
  }

  getPersonName(accountId: number) {
    let name: string='';

    this.getAccountFromId(accountId).subscribe((account: Account) => {
      this.getPersonFromId(account.personId).subscribe((person: Person) => {
        name = person.name;
      });
    });

    return name;
  }
}
