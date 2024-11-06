import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TooltipDirective } from '@coreui/angular';
import { BaseComponent } from '../../../shared/core/base.component';
import { TaskAssignUserComponent } from '../task-assign-user/task-assign-user.component';
import { TaskI } from '../../../shared/interface/TaskI.interface';
import { TaskService } from '../../../shared/services/task.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, TooltipDirective, TaskAssignUserComponent, HttpClientModule],
  providers: [TaskService], 
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent extends BaseComponent implements OnInit {

  public list: TaskI[] = [];

  constructor(
    public route: Router, 
    private taskService: TaskService
  ) { super() }

  ngOnInit(): void {
    this.getAll();
  }

  private async getAll(): Promise<void> {
    try {
      this.list = await this.taskService.findAll();
    } catch (error) {
      this.handleError(`servidor: ${error}`);
    }
  }

  public async delete(id: number): Promise<void> {
    await this.confirmDelete().then(async (result) => {
      if (result.isConfirmed) {
        await this.taskService.delete(id);
        await this.handleSuccessDelete();
        await this.getAll();
      }
    });
  }

}
