import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BaseComponent } from '../../../shared/core/base.component';

@Component({
  selector: 'app-task-assign-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './task-assign-user.component.html',
  styleUrl: './task-assign-user.component.scss'
})
export class TaskAssignUserComponent extends BaseComponent implements OnInit {

  @Input() id: any = null;
  @Output() closeModal: EventEmitter<any> = new EventEmitter();
  public users: string[] = ["Esteban", "Ariana", "Jeison", "Diego"];

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) { super() }

  ngOnInit(): void {
    this.form = this.fb.group({
      user: ['', Validators.required]
    });
  }

  async submit(): Promise<void> {
    if (this.form.valid) {
      this.closeModal.emit();
      this.handleSuccess("Se notifico correctamente");
    }
  }
}
