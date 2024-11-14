import { Injectable } from '@angular/core';
import { BaseComponent } from '../core/base.component';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { UserI } from '../interface/UserI.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseComponent {

  private name: string = "auth";

  constructor(
    private http: HttpClient
  ) { super() }

  public login(body: UserI): Promise<any> {
    const url = `${this.apiUrl}/${this.name}`;
    const headers = new HttpHeaders();

    let params = new HttpParams()
      .set('email', body.email.toString())
      .set('password', body.password.toString());

    return this.http.get<UserI>(url, { headers, params }).toPromise();
  }

  public register(body: UserI): Promise<any> {
    const url: string = `${this.apiUrl}/${this.name}`;
    return this.http.post(url, body).toPromise();
  }

  public changePassword(id: number, body: any): Promise<any> {
    const url: string = `${this.apiUrl}/${this.name}?id=${id}`;
    return this.http.put(url, body).toPromise();
  }

}
