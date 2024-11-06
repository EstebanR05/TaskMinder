import { Injectable } from '@angular/core';
import { BaseComponent } from '../core/base.component';
import { HttpClient } from '@angular/common/http';
import { StatusI } from '../interface/settings.interface';

@Injectable({
  providedIn: 'root'
})
export class StatusService extends BaseComponent {

  private name: string = "states";

  constructor(
    private http: HttpClient
  ) { super() }

  public findAll(): Promise<any> {
    const url: string = `${this.apiUrl}/${this.name}`;
    return this.http.get<StatusI[]>(url).toPromise();
  }

  public findById(): Promise<any> {
    const url: string = `${this.apiUrl}/${this.name}`;
    return this.http.get<StatusI>(url).toPromise();
  }

  public save(body: StatusI): Promise<any> {
    const url: string = `${this.apiUrl}/${this.name}`;
    return this.http.post(url, body).toPromise();
  }

  public update(id: number, body: any): Promise<any> {
    const url: string = `${this.apiUrl}/${this.name}?id=${id}`;
    return this.http.put(url, body).toPromise();
  }


  public delete(id: number): Promise<any> {
    const url: string = `${this.apiUrl}/${this.name}?id=${id}`;
    return this.http.delete(url).toPromise();
  }

}
