import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent implements OnInit {

  public list: any[] = [{
    id: 1,
    name: "realizar informe",
    description: "se debe realizar el informe con las normas IEEE",
    createAt: "2024-01-01",
    finishedAt: "2024-10-20",
    state: "creada",
    priority: "baja",
  }];
  
  constructor(public route: Router) { }

  ngOnInit(): void {
  }

  public async delete(id: number){

  }

}
