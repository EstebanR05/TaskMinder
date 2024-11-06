import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from '../../../shared/core/base.component';
import Swal from 'sweetalert2';
import { TaskService } from 'src/app/shared/services/task.service';
import { TaskI } from 'src/app/shared/interface/TaskI.interface';

@Component({
  selector: 'app-task-manager',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers: [TaskService],
  templateUrl: './task-manager.component.html',
  styleUrl: './task-manager.component.scss'
})
export class TaskManagerComponent extends BaseComponent implements OnInit {

  public id: any = this.ActiveRoute.snapshot.paramMap.get('id');
  public states: any[] = ["creada", "asignada", "en proceso", "finalizada"];
  public prioritys: any[] = ["baja", "media", "urgente"];

  constructor(
    private ActiveRoute: ActivatedRoute,
    private fb: FormBuilder,
    private route: Router,
    public location: Location,
    private taskService: TaskService
  ) { super() }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      createAt: ['', Validators.required],
      limit: ['', Validators.required],
      stateId: ['', Validators.required],
      priorityId: ['', Validators.required],
      creatorId: ['', Validators.required],
    });

    if (this.id) {
      this.getValuesForm();
    }
  }

  async getValuesForm(): Promise<void> {
    try {
      const response: TaskI = await this.taskService.findById(this.id);
      this.form.patchValue(response);
    } catch (error) {
      console.error('Error fetching task', error);
    }
  }

  async submit(): Promise<void> {
    if (this.form.valid) {
      await (!this.id) ? this.taskService.save(this.form.value) : this.taskService.update(this.id, this.form.value);
      let info = (this.id != null) ? "actualizada" : "creada";
      this.handleSuccess(`${info} correctamente`);
      this.route.navigate(['pages/task']);
    }
  }
}
