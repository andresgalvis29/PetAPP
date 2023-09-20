import { SharedModule } from './../shared/shared.module';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PacientesPage } from './pacientes.page';

import { PacientesPageRoutingModule } from './pacientes-routing.module';
import { ListadoDuenosComponent } from './containers/containers/listado-duenos/listado-duenos.component';
import { CrearDuenoComponent } from './containers/containers/crear-dueno/crear-dueno.component';
import { DetalleDuenoComponent } from './containers/containers/detalle-dueno/detalle-dueno.component';
import { CrearMascotaComponent } from './containers/containers/crear-mascota/crear-mascota.component';

@NgModule({
	imports: [
		IonicModule,
		CommonModule,
		FormsModule,
		PacientesPageRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		SharedModule
	],
	declarations: [
		PacientesPage,
		ListadoDuenosComponent,
		CrearDuenoComponent,
		DetalleDuenoComponent,
		CrearMascotaComponent
	]
})
export class PacientesPageModule {}
