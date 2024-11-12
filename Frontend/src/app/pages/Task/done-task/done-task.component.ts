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
  selector: 'app-done-task',
  standalone: true,
  imports: [CommonModule, TooltipDirective, TaskAssignUserComponent, HttpClientModule],
  providers: [TaskService],
  templateUrl: './done-task.component.html',
  styleUrl: './done-task.component.scss'
})
export class DoneTaskComponent extends BaseComponent implements OnInit {

  public list: TaskI[] = [];

  constructor(
    public route: Router,
    private taskService: TaskService
  ) { super() }

  ngOnInit(): void {
    this.getAllFinished();
  }

  private async getAllFinished(): Promise<void> {
    try {
      this.list = await this.taskService.findAllDone();
    } catch (error) {
      this.handleError(`servidor: ${error}`);
    }
  }

  public async cancelTaskDone(id: number): Promise<void> {
    try {
      await this.taskService.cancelTaskDone(id);
      this.handleSuccess(`Tarea cancelada correctamente`);
      await this.getAllFinished();
      this.route.navigate(['pages/task/done']);
    } catch (error) {
      this.handleError(`Error fetching: ${error}`);
    }
  }
}
