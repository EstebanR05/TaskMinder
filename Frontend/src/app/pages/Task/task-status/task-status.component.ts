import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BaseComponent } from '../../../shared/core/base.component';
import { StatusI } from '../../../shared/interface/settings.interface';
import { StatusService } from '../../../shared/services/status.service';
import { TaskService } from '../../../shared/services/task.service';

@Component({
  selector: 'app-task-status',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers: [StatusService, TaskService],
  templateUrl: './task-status.component.html',
  styleUrl: './task-status.component.scss',
})
export class TaskStatusComponent extends BaseComponent implements OnInit {
  @Input() id: any = null;
  @Output() closeModal: EventEmitter<any> = new EventEmitter();
  public status: StatusI[] = [];

  constructor(
    private fb: FormBuilder, 
    private router: Router,
    private statusService: StatusService,
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
      this.status = await this.statusService.findAll();
    } catch (error) {
      this.handleError('servidor: ' + error);
    }
  }

  public async submit(): Promise<void> {
    try{
      if (this.form.valid) {
        //LLAMAR A TASK SERVICE Y CONSUMIR SERVICIO DE ACTUALIZAR ESTADO DE LA TAREA
        //await this.taskService.saveStatusByTask();
        this.closeModal.emit();
        this.handleSuccess('Se notifico correctamente');
      }
    }catch(error){
      this.handleError('servidor: ' + error);
    }
  }
}
