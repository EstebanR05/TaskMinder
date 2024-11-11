import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BaseComponent } from '../../../shared/core/base.component';
import { IdName } from '../../../shared/interface/settings.interface';


@Component({
  selector: 'app-managger',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers: [],
  templateUrl: './managger.component.html',
  styleUrl: './managger.component.scss'
})
export class ManaggerComponent extends BaseComponent implements OnInit {

  @Input() id: any = null;
  @Input() title: string = '';
  @Input() List: IdName[] = [];
  @Output() closeModal: EventEmitter<any> = new EventEmitter();

  constructor(
    private fb: FormBuilder, 
  ) { super() }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: ['', Validators.required],
    });
  }

  public async submit(): Promise<void> {
    try{
      if (this.form.valid) {
        this.closeModal.emit();
      }
    }catch(error){
      this.handleError('servidor: ' + error);
    }
  }

}
