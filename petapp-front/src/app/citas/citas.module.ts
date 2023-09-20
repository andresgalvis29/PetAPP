import { BusquedaMedicamentosComponent } from './components/busqueda-medicamentos/busqueda-medicamentos.component';
import { SharedModule } from './../shared/shared.module';
import { DetalleCitaComponent } from './containers/detalle-cita/detalle-cita.component';
import { ListadoCitasComponent } from './containers/listado-citas/listado-citas.component';
import { CrearCitaComponent } from './containers/crear-cita/crear-cita.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CitasPage } from './citas.page';

import { CitasPageRoutingModule } from './citas-routing.module';
import { BusquedaPacientesComponent } from './components/busqueda-pacientes/busqueda-pacientes.component';

@NgModule({
	imports: [
		IonicModule,
		CommonModule,
		FormsModule,
		CitasPageRoutingModule,
		SharedModule,
		FormsModule,
		ReactiveFormsModule
	],
	declarations: [
		CitasPage,
		BusquedaPacientesComponent,
		CrearCitaComponent,
		ListadoCitasComponent,
		DetalleCitaComponent,
		BusquedaMedicamentosComponent
	]
})
export class CitasPageModule {}
