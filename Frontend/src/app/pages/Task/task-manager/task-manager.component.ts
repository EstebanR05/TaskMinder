import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from '../../../shared/core/base.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-task-manager',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './task-manager.component.html',
  styleUrl: './task-manager.component.scss'
})
export class TaskManagerComponent extends BaseComponent implements OnInit {

  public id: any = this.ActiveRoute.snapshot.paramMap.get('id');

  constructor(
    private ActiveRoute: ActivatedRoute,
    private fb: FormBuilder,
    private route: Router,
    public location: Location
  ) { super() }

  ngOnInit(): void {

  }

  async submit(): Promise<void> {
    if (this.form.valid) {
      if (this.id) {
        //await this.taskService.update(this.id, this.form.value);
      } else {
        //await this.taskService.create(this.form.value);
      }

      this.route.navigate(['Task']);
      Swal.fire('Saved!', '', 'success');
    }
  }
}
