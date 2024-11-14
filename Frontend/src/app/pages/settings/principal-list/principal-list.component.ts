import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TooltipDirective } from '@coreui/angular';
import { BaseComponent } from '../../../shared/core/base.component';
import { IdName, PrioritiesI, RolsI, StatusI } from '../../../shared/interface/settings.interface';
import { HttpClientModule } from '@angular/common/http';
import { ManaggerComponent } from '../managger/managger.component';
import { PrioritiesService } from '../../../shared/services/priorities.service';
import { StatusService } from '../../../shared/services/status.service';
import { RolsService } from '../../../shared/services/rols.service';
import { PrincialConstants } from '../../../shared/interface/settings.interface';

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
  public titleModal: string = "";
  public listModal: any[] = [];
  public principalConstants = PrincialConstants;

  constructor(
    public route: Router,
    private rolsService: RolsService,
    private statusService: StatusService,
    private prioritiesService: PrioritiesService
  ) { super(); }

  ngOnInit(): void {
    this.onReload();
  }

  public async onReload(): Promise<void> {
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

  public async delete(id: number, type: string): Promise<void> {
    try {
      await this.confirmDelete().then(async (result) => {
        if (result.isConfirmed) {
          if (type == PrincialConstants.first) {
            await this.rolsService.delete(id);
          } else if (type == PrincialConstants.second) {
            await this.prioritiesService.delete(id);
          } else if (type == PrincialConstants.third) {
            await this.statusService.delete(id);
          }

          this.onReload();
        }
      });
    } catch (error) {
      this.handleError(`Error handle: ${error}`);
    }
  }

  public modalSettings(type: string, list: any[], id: any = null) {
    try {
      this.idModal = id;
      this.titleModal = type;
      this.listModal = list;
    } catch (error) {
      this.handleError(`Error handle: ${error}`);
    }
  }

  public getTitle(): string {
    return (this.idModal != null) ? `Actualizar ${this.titleModal}` : `Crear ${this.titleModal}`;
  }

}
