import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TooltipDirective } from '@coreui/angular';
import { BaseComponent } from '../../../shared/core/base.component';
import { TaskAssignUserComponent } from '../task-assign-user/task-assign-user.component';
import { TaskI } from '../../../shared/interface/TaskI.interface';
import { TaskService } from '../../../shared/services/task.service';
import { HttpClientModule } from '@angular/common/http';
import { BehaviorSubject, Subscription } from 'rxjs';
import { TaskStatusComponent } from '../task-status/task-status.component';
import { TaskPrioritiesComponent } from '../task-priorities/task-priorities.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, TooltipDirective, TaskAssignUserComponent, TaskStatusComponent, TaskPrioritiesComponent, HttpClientModule],
  providers: [TaskService], 
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent extends BaseComponent implements OnInit {

  public list: TaskI[] = [];
  
  //status modal
  public selectedStatus$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public modalDisplayStatus$: BehaviorSubject<any> = new BehaviorSubject<any>("none");
  public subscriptionStatus!: Subscription;

   //Pirority modal
   public selectedPrioriry$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
   public modalDisplayPrioriry$: BehaviorSubject<any> = new BehaviorSubject<any>("none");
   public subscriptionPrioriry!: Subscription;

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

  public openModalStatus(event: any, id = null) {
    if (id) this.idModal = id;
    this.selectedStatus$.next({ event })
    this.modalDisplayStatus$.next("block");
  }

  public closeModalMethodStatus() {
    this.selectedStatus$.next(null);
    this.modalDisplayStatus$.next("none");
    this.subscriptionStatus.unsubscribe();
  }

  public openModalPrioriry(event: any, id = null) {
    if (id) this.idModal = id;
    this.selectedPrioriry$.next({ event })
    this.modalDisplayPrioriry$.next("block");
  }

  public closeModalMethodPrioriry() {
    this.selectedPrioriry$.next(null);
    this.modalDisplayPrioriry$.next("none");
    this.subscriptionPrioriry.unsubscribe();
  }

}
