import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TooltipDirective } from '@coreui/angular';
import { BaseComponent } from '../../../shared/core/base.component';
import { PrioritiesI, RolsI, StatusI } from 'src/app/shared/interface/settings.interface';
import { HttpClientModule } from '@angular/common/http';
import { ManaggerComponent } from '../managger/managger.component';
import { PrioritiesService } from 'src/app/shared/services/priorities.service';
import { StatusService } from 'src/app/shared/services/status.service';
import { RolsService } from 'src/app/shared/services/rols.service';


@Component({
  selector: 'app-principal-list',
  standalone: true,
  imports: [CommonModule, TooltipDirective, HttpClientModule, ManaggerComponent],
  providers: [RolsService, StatusService, PrioritiesService],
  templateUrl: './principal-list.component.html',
  styleUrl: './principal-list.component.scss'
})
export class PrincipalListComponent extends BaseComponent implements OnInit {

  public listRols: RolsI[] = [];
  public listPriorities: PrioritiesI[] = [];
  public listStatus: StatusI[] = [];

  constructor(
    public route: Router,
    private rolsService: RolsService,
    private statusService: StatusService,
    private prioritiesService: PrioritiesService
  ) { super(); }

  ngOnInit(): void {
    this.onStart();
  }

  public async onStart(): Promise<void> {
    await this.getAllRoles();
    await this.getAllPriorities();
    await this.getAllStatus();
  }

  private async getAllRoles(): Promise<void> {
    try {
      this.listRols = await this.rolsService.findAll();
    } catch (error) {
      this.handleError(`Error handle: ${error}`);
    }
  }

  private async getAllPriorities(): Promise<void> {
    try {
      this.listPriorities = await this.prioritiesService.findAll();
    } catch (error) {
      this.handleError(`Error handle: ${error}`);
    }
  }

  private async getAllStatus(): Promise<void> {
    try {
      this.listStatus = await this.statusService.findAll();
    } catch (error) {
      this.handleError(`Error handle: ${error}`);
    }
  }

  public async delete(id: number): Promise<void> {

  }

  public async deletePriorities(id: number): Promise<void> {

  }

  public async deleteStatus(id: number): Promise<void> {

  }
}
