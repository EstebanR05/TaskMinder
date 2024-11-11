import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BaseComponent } from '../../../shared/core/base.component';
import { UserI } from '../../../shared/interface/UserI.interface';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-task-assign-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers: [UserService], 
  templateUrl: './task-assign-user.component.html',
  styleUrl: './task-assign-user.component.scss'
})
export class TaskAssignUserComponent extends BaseComponent implements OnInit {

  @Input() id: any = null;
  @Output() closeModal: EventEmitter<any> = new EventEmitter();
  public users: UserI[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) { super() }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: ['', Validators.required]
    });

    this.getAllUsers();
  }

  async getAllUsers(): Promise <void> {
    try {
      this.users = await this.userService.findAll();
    } catch (error) {
      this.handleError(`Error fetching: ${error}`);
    }
  }

  async submit(): Promise<void> {
    if (this.form.valid) {
      this.closeModal.emit();
      this.handleSuccess("Se notifico correctamente");
    }
  }
}
