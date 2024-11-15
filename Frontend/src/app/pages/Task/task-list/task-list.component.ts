import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TooltipDirective } from '@coreui/angular';
import { BaseComponent } from '../../../shared/core/base.component';
import { TaskI } from '../../../shared/interface/TaskI.interface';
import { TaskService } from '../../../shared/services/task.service';
import { HttpClientModule } from '@angular/common/http';
import { ModalChangeComponent } from '../modal-change/modal-change.component';
import { PrincialConstants } from 'src/app/shared/interface/settings.interface';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, TooltipDirective, HttpClientModule, ModalChangeComponent],
  providers: [TaskService],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent extends BaseComponent implements OnInit {

  public list: TaskI[] = [];
  public titleModal: string = "";
  public principalConstants = PrincialConstants;

  constructor(
    public route: Router,
    private taskService: TaskService
  ) { super() }

  ngOnInit(): void {
    this.onReload();
  }

  public async onReload(): Promise<void> {
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

  public modalSettings(type: string, id: number) {
    this.idModal = id;
    this.titleModal = type;
  }

}
