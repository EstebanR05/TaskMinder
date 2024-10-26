import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
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
  public states: any[] = ["creada", "asignada", "en proceso", "finalizada"]; 
  public prioritys: any[] = ["baja", "media", "urgente"]; 

  constructor(
    private ActiveRoute: ActivatedRoute,
    private fb: FormBuilder,
    private route: Router,
    public location: Location
  ) { super() }

  ngOnInit(): void {

    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      state: ['', Validators.required],
      priority: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
    });

    if (this.id) {
      this.getValuesForm();
    }
  }

  async getValuesForm(): Promise<void> {
    try {
      this.form.patchValue({
        name: "realizar informe",
        description: "se debe realizar el informe con las normas IEEE",
        state: this.states[0],
        priority: this.prioritys[0],
        startDate: "2024-01-01",
        endDate: "2024-12-31",
      });
    } catch (error) {
      console.error('Error fetching task', error);
    }
  }

  async submit(): Promise<void> {
    if (this.form.valid) {
      let info = (this.id != null) ? "actualizada" : "creada";
      this.handleSuccess(`${info} correctamente`);
      this.route.navigate(['pages/task']);
    }
  }
}
