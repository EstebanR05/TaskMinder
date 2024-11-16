import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { BaseComponent } from '../../../shared/core/base.component';
import { IdName } from '../../../shared/interface/settings.interface';
import { HttpClientModule } from '@angular/common/http';
import { PrioritiesService } from '../../../shared/services/priorities.service';
import { PrincialConstants } from '../../../shared/interface/settings.interface';
import { TaskService } from 'src/app/shared/services/task.service';
import { UserService } from 'src/app/shared/services/user.service';
import { UserI } from 'src/app/shared/interface/UserI.interface';

@Component({
  selector: 'app-modal-change',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  providers: [UserService, TaskService, PrioritiesService],
  templateUrl: './modal-change.component.html',
  styleUrl: './modal-change.component.scss'
})
export class ModalChangeComponent extends BaseComponent implements OnInit {

  @Input() id: any;
  @Input() title: string = '';
  @Output() closeModal: EventEmitter<any> = new EventEmitter();
  @Output() onReload: EventEmitter<any> = new EventEmitter();
  List: IdName[] = [];

  constructor(
    private fb: FormBuilder,
    private prioritiesService: PrioritiesService,
    private userService: UserService,
    private taskService: TaskService
  ) { super() }

  ngOnInit(): void {
    this.form = this.fb.group({
      idChange: ['', Validators.required],
    });

    this.getList();
  }

  private async getList(): Promise<void> {
    if (PrincialConstants.third == this.title) {
      this.List = await this.taskService.getStateByIdTask(this.id);
    } else if (PrincialConstants.second == this.title) {
      this.List = await this.prioritiesService.findAll();
    } else if (PrincialConstants.fourth == this.title) {
      const users = await this.userService.findAll();
      this.List = users.map((m: UserI) => {
        return { id: m.id, name: m.name } as IdName;
      });
    }
  }

  public async submit(): Promise<void> {
    try {
      if (this.form.valid) {
        if (PrincialConstants.second == this.title) {
          await this.taskService.changePrioritiesTask(this.id, { idPriority: this.form.value.idChange });
        } else if (PrincialConstants.third == this.title) {
          await this.taskService.changeStatusTask(this.id, { idStatus: this.form.value.idChange });
        } else if (PrincialConstants.fourth == this.title) {
          //changeAssingUser method 
        }

        this.closeModal.emit();
        this.onReload.emit();
      }
    } catch (error) {
      this.handleError('servidor: ' + error);
    }
  }

}
