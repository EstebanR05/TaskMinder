import { Component, OnInit } from '@angular/core';

import { CommonModule, Location } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { BaseComponent } from '../../../shared/core/base.component';
import { TaskService } from '../../../shared/services/task.service';
import { StatusService } from '../../../shared/services/status.service';
import { PrioritiesService } from '../../../shared/services/priorities.service';

import { TaskI } from '../../../shared/interface/TaskI.interface';
import { StatusI, PrioritiesI } from '../../../shared/interface/settings.interface';

@Component({
  selector: 'app-task-manager',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  providers: [TaskService, StatusService, PrioritiesService],
  templateUrl: './task-manager.component.html',
  styleUrl: './task-manager.component.scss'
})
export class TaskManagerComponent extends BaseComponent implements OnInit {

  public id: any = this.ActiveRoute.snapshot.paramMap.get('id');
  public states: StatusI[] = [];
  public prioritys: PrioritiesI[] = [];

  constructor(
    private ActiveRoute: ActivatedRoute,
    private fb: FormBuilder,
    private route: Router,
    public location: Location,
    private taskService: TaskService,
    private statusService: StatusService,
    private prioritiesService: PrioritiesService
  ) { super() }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      createAt: ['', Validators.required],
      limit: ['', Validators.required],
      stateId: ['', Validators.required],
      priorityId: ['', Validators.required],
      creatorId: ['']
    });

    this.onReload();
  }

  public async onReload(): Promise<void> {
    if (this.id) this.getValuesForm();
    this.getStates();
    this.getPriorities();
  }

  private async getValuesForm(): Promise<void> {
    try {
      const response: TaskI = await this.taskService.findById(this.id);
      const startDate = new Date(response.createAt);
      const endDate = new Date(response.limit);

      if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
        throw new Error('Invalid date format');
      }

      response.createAt = startDate.toISOString().split('T')[0];
      response.limit = endDate.toISOString().split('T')[0];
      this.form.patchValue(response);
    } catch (error) {
      this.handleError(`Error fetching: ${error}`)
    }
  }

  private async getStates(): Promise<void> {
    try {
      this.states = await this.statusService.findAll();
    } catch (error) {
      this.handleError(`Error fetching: ${error}`);
    }
  }

  private async getPriorities(): Promise<void> {
    try {
      this.prioritys = await this.prioritiesService.findAll();
    } catch (error) {
      this.handleError(`Error fetching: ${error}`);
    }
  }

  public async submit(): Promise<void> {
    try {
      if (this.form.valid) {
        this.validatedDates();
        (!this.id) ?
          await this.taskService.save(this.form.value) :
          await this.taskService.update(this.id, this.form.value);
        let info = (this.id != null) ? "actualizada" : "creada";
        this.handleSuccess(`${info} correctamente`);
        this.route.navigate(['pages/task']);
      }
    } catch (error) {
      this.handleError(`${error}`);
    }
  }

  private validatedDates(): void {
    const currentDate = new Date();
    const limitDate = new Date(this.form.value.limit + 'T00:00:00');
    const createAtDate = new Date(this.form.value.createAt + 'T00:00:00');

    currentDate.setHours(0, 0, 0, 0);
    limitDate.setHours(0, 0, 0, 0);
    createAtDate.setHours(0, 0, 0, 0);

    if (isNaN(limitDate.getTime()) && isNaN(createAtDate.getTime())) {
      throw new Error("La fecha proporcionada no es válida.");
    }

    if (limitDate < currentDate) {
      throw new Error("No puede seguir el proceso porque la Fecha de entrega es menor a la actual.");
    }

    if (currentDate < createAtDate) {
      throw new Error("No puede seguir el proceso porque la Fecha de creación es mayor a la actual.");
    }
  }

}
