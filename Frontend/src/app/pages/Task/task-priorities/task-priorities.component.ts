import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BaseComponent } from '../../../shared/core/base.component';
import { PrioritiesI, StatusI } from '../../../shared/interface/settings.interface';
import { TaskService } from '../../../shared/services/task.service';

@Component({
  selector: 'app-task-priorities',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers: [TaskService],
  templateUrl: './task-priorities.component.html',
  styleUrl: './task-priorities.component.scss',
})
export class TaskPrioritiesComponent extends BaseComponent implements OnInit {
  @Input() id: any = null;
  @Output() closeModal: EventEmitter<any> = new EventEmitter();
  public priorities: PrioritiesI[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private taskService: TaskService
  ) {
    super();
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: ['', Validators.required],
    });

    this.getAllStatus();
  }

  private async getAllStatus(): Promise<void> {
    try {
      this.priorities = [
        {
          id: 1,
          name: 'urgente 1',
        },
        {
          id: 2,
          name: 'urgente 2',
        },
      ];
    } catch (error) {
      this.handleError('servidor: ' + error);
    }
  }

  public async submit(): Promise<void> {
    try {
      if (this.form.valid) {
        //LLAMAR A TASK SERVICE Y CONSUMIR SERVICIO DE ACTUALIZAR ESTADO DE LA TAREA
        //await this.taskService.savePriorityByTask();
        this.closeModal.emit();
        this.handleSuccess('Se notifico correctamente');
      }
    } catch (error) {
      this.handleError('servidor: ' + error);
    }
  }
}
