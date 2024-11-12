import { Injectable } from '@angular/core';
import { BaseComponent } from '../core/base.component';
import { HttpClient } from '@angular/common/http';
import { RolsI } from '../interface/settings.interface';

@Injectable({
  providedIn: 'root'
})
export class RolsService extends BaseComponent {

  private name: string = "rols";

  constructor(
    private http: HttpClient
  ) { super() }

  public findAll(): Promise<any> {
    const url: string = `${this.apiUrl}/${this.name}`;
    return this.http.get<RolsI[]>(url).toPromise();
  }

  public findById(): Promise<any> {
    const url: string = `${this.apiUrl}/${this.name}`;
    return this.http.get<RolsI>(url).toPromise();
  }

  public save(body: RolsI): Promise<any> {
    const url: string = `${this.apiUrl}/${this.name}`;
    return this.http.post(url, body, { headers: { 'Content-Type': 'application/json' }}).toPromise();
  }

  public update(id: number, body: any): Promise<any> {
    const url: string = `${this.apiUrl}/${this.name}?id=${id}`;
    return this.http.put(url, body, { headers: { 'Content-Type': 'application/json' }}).toPromise();
  }


  public delete(id: number): Promise<any> {
    const url: string = `${this.apiUrl}/${this.name}?id=${id}`;
    return this.http.delete(url).toPromise();
  }

}