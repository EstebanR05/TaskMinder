import { Injectable } from '@angular/core';
import { BaseComponent } from '../core/base.component';
import { HttpClient } from '@angular/common/http';
import { TaskI } from '../interface/TaskI.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService extends BaseComponent {

  private name: string = "tasks";

  constructor(
    private http: HttpClient
  ) { super() }

  public findAll(): Promise<any> {
    const url: string = `${this.apiUrl}/${this.name}`;
    return this.http.get<TaskI[]>(url).toPromise();
  }

  public findAllDone(): Promise<any> {
    const url: string = `${this.apiUrl}/${this.name}/getAllTaskDone`;
    return this.http.get<TaskI[]>(url).toPromise();
  }

  public findById(id: number): Promise<any> {
    const url: string = `${this.apiUrl}/${this.name}?id=${id}`;
    return this.http.get<TaskI>(url).toPromise();
  }

  public save(body: TaskI): Promise<any> {
    body.creatorId = 1;
    const url: string = `${this.apiUrl}/${this.name}`;
    return this.http.post(url, body, { headers: { 'Content-Type': 'application/json' } }).toPromise();
  }

  public update(id: number, body: TaskI): Promise<any> {
    const url: string = `${this.apiUrl}/${this.name}?id=${id}`;
    return this.http.put(url, body, { headers: { 'Content-Type': 'application/json' } }).toPromise();
  }

  public cancelTaskDone(id: number): Promise<any> {
    const url: string = `${this.apiUrl}/${this.name}/cancelTaskDone?id=${id}`;
    return this.http.put(url, {}, { headers: { 'Content-Type': 'application/json' } }).toPromise();
  }

  public delete(id: number): Promise<any> {
    const url: string = `${this.apiUrl}/${this.name}?id=${id}`;
    return this.http.delete(url).toPromise();
  }

}
