import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TooltipDirective } from '@coreui/angular';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule,TooltipDirective],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent implements OnInit {

  public list: any[] = [{
    id: 1,
    name: "realizar informe",
    description: "se debe realizar el informe con las normas IEEE",
    createAt: "2024-01-01",
    finishedAt: "2024-10-20",
    state: "creada",
    priority: "baja",
  }];
  
  constructor(public route: Router) { }

  ngOnInit(): void {
  }

  public async delete(id: number){
    Swal.fire({
      title: "Estas seguro de eliminar?",
      text: "No podras revertir esta accion!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, estoy seguro!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Eliminado!",
          text: "La tarea se ha eliminado correctamente.",
          icon: "success"
        });
      }
    });
  }

}
