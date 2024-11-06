import { Injectable } from '@angular/core';
import { BaseComponent } from '../core/base.component';
import { HttpClient } from '@angular/common/http';
import { TaskI } from '../interface/TaskI.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService extends BaseComponent {

  constructor(
    private http: HttpClient
  ) { super() }

  public findAll(): Promise<any> {
    const url: string = this.apiUrl + '/tasks';
    return this.http.get<TaskI[]>(url).toPromise();
  }

  public findById(): Promise<any> {
    const url: any = this.apiUrl + '/tasks';
    return this.http.get<TaskI>(url).toPromise();
  }

  public save(body: TaskI): Promise<any> {
    const url = `${this.apiUrl}/tasks`;
    return this.http.post(url, body).toPromise();
  }

  public update(id: number, body: any): Promise<any> {
    const url = `${this.apiUrl}/tasks?id=${id}`;
    return this.http.put(url, body).toPromise();
  }


  public delete(id: number): Promise<any> {
    const url = `${this.apiUrl}/tasks?id=${id}`;
    return this.http.delete(url).toPromise();
  }

}
