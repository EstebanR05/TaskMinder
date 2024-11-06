import { Injectable } from '@angular/core';
import { BaseComponent } from '../core/base.component';
import { HttpClient } from '@angular/common/http';
import { UserI } from '../interface/UserI.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseComponent {

  private name: string = "users";

  constructor(
    private http: HttpClient
  ) { super() }

  public findAll(): Promise<any> {
    const url: string = `${this.apiUrl}/${this.name}`;
    return this.http.get<UserI[]>(url).toPromise();
  }

  public findById(): Promise<any> {
    const url: string = `${this.apiUrl}/${this.name}`;
    return this.http.get<UserI>(url).toPromise();
  }

  public save(body: UserI): Promise<any> {
    const url: string = `${this.apiUrl}/${this.name}`;
    return this.http.post(url, body).toPromise();
  }

  public update(id: number, body: UserI): Promise<any> {
    const url: string = `${this.apiUrl}/${this.name}?id=${id}`;
    return this.http.put(url, body).toPromise();
  }

  public delete(id: number): Promise<any> {
    const url: string = `${this.apiUrl}/${this.name}?id=${id}`;
    return this.http.delete(url).toPromise();
  }

}
