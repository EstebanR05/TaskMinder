import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { BaseComponent } from '../../../shared/core/base.component';
import { IdName } from '../../../shared/interface/settings.interface';
import { HttpClientModule } from '@angular/common/http';
import { PrioritiesService } from '../../../shared/services/priorities.service';
import { StatusService } from '../../../shared/services/status.service';
import { RolsService } from '../../../shared/services/rols.service';
import { PrincialConstants } from '../principal-list/principal-list.component';

@Component({
  selector: 'app-managger',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  providers: [RolsService, StatusService, PrioritiesService],
  templateUrl: './managger.component.html',
  styleUrl: './managger.component.scss'
})
export class ManaggerComponent extends BaseComponent implements OnInit {

  @Input() id: any = null;
  @Input() title: string = '';
  @Input() List: IdName[] = [];
  @Output() closeModal: EventEmitter<any> = new EventEmitter();
  @Output() onReload: EventEmitter<any> = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private rolsService: RolsService,
    private statusService: StatusService,
    private prioritiesService: PrioritiesService
  ) { super() }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
    });
  }

  public async submit(): Promise<void> {
    try {
      if (this.form.valid) {
        
        if (PrincialConstants.first === this.title) {
          (this.id != null) ? 
          await this.rolsService.update(this.id, this.form.value) : 
          await this.rolsService.save(this.form.value);
        } else if (PrincialConstants.second == this.title) {
          (this.id != null) ? 
          await this.prioritiesService.update(this.id, this.form.value) : 
          await this.prioritiesService.save(this.form.value);
        } else if (PrincialConstants.third == this.title) {
          (this.id != null) ? 
          await this.statusService.update(this.id, this.form.value) : 
          await this.statusService.save(this.form.value);
        }

        this.closeModal.emit();
        this.onReload.emit();
      }
    } catch (error) {
      this.handleError('servidor: ' + error);
    }
  }

}
