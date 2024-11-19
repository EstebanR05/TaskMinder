import { Component, OnInit } from '@angular/core';
import { NgStyle } from '@angular/common';
import { IconDirective } from '@coreui/icons-angular';
import { ContainerComponent, RowComponent, ColComponent, CardGroupComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, FormControlDirective, ButtonDirective } from '@coreui/angular';
import { Router } from '@angular/router';
import { BaseComponent } from '../../../shared/core/base.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';
import { UserI } from '../../../shared/interface/UserI.interface';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, ContainerComponent, RowComponent, ColComponent, CardGroupComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, IconDirective, FormControlDirective, ButtonDirective, NgStyle],
  providers: [AuthService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent extends BaseComponent implements OnInit {

  constructor(
    public route: Router,
    private fb: FormBuilder,
    private authService: AuthService
  ) { super() }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  async submit(): Promise<void> {
    try {
      if (this.form.valid) {
        const response: UserI = await this.authService.login(this.form.value);
        localStorage.setItem('userId', response.id.toString());
        this.handleSuccess('usuario logeado correctamente!');
        this.route.navigate(["/pages/task"]);
      } else {
        this.handleError('usuario o contraseña no es valido');
      }
    } catch (error: any) {
      console.log(error);
      
      this.handleError('usuario o contraseña no es valido');
    }
  }

}
