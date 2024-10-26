import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-assign-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './task-assign-user.component.html',
  styleUrl: './task-assign-user.component.scss'
})
export class TaskAssignUserComponent {

}
