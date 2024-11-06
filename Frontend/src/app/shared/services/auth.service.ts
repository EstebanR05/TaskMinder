import { Injectable } from '@angular/core';
import { BaseComponent } from '../core/base.component';
import { HttpClient } from '@angular/common/http';
import { TaskI } from '../interface/TaskI.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseComponent {

  private name: string = "auth";

  constructor(
    private http: HttpClient
  ) { super() }

  public login(): Promise<any> {
    const url: string = `${this.apiUrl}/${this.name}`;
    return this.http.get<TaskI[]>(url).toPromise();
  }

  public register(body: TaskI): Promise<any> {
    const url: string = `${this.apiUrl}/${this.name}`;
    return this.http.post(url, body).toPromise();
  }

  public changePassword(id: number, body: any): Promise<any> {
    const url: string = `${this.apiUrl}/${this.name}?id=${id}`;
    return this.http.put(url, body).toPromise();
  }

}
