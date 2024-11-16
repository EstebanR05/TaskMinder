import { Injectable } from '@angular/core';
import { BaseComponent } from '../core/base.component';
import { HttpClient } from '@angular/common/http';
import { PrioritiesI } from '../interface/settings.interface';

@Injectable({
  providedIn: 'root'
})
export class PrioritiesService extends BaseComponent {

  private name: string = "priority";

  constructor(
    private http: HttpClient
  ) { super() }

  public findAll(): Promise<any> {
    const url: string = `${this.apiUrl}/${this.name}`;
    return this.http.get<PrioritiesI[]>(url).toPromise();
  }

  public findById(): Promise<any> {
    const url: string = `${this.apiUrl}/${this.name}`;
    return this.http.get<PrioritiesI>(url).toPromise();
  }

  public save(body: PrioritiesI): Promise<any> {
    const url: string = `${this.apiUrl}/${this.name}`;
    return this.http.post(url, body).toPromise();
  }

  public update(id: number, body: PrioritiesI): Promise<any> {
    const url: string = `${this.apiUrl}/${this.name}?id=${id}`;
    return this.http.put(url, body).toPromise();
  }


  public delete(id: number): Promise<any> {
    const url: string = `${this.apiUrl}/${this.name}?id=${id}`;
    return this.http.delete(url).toPromise();
  }

}
