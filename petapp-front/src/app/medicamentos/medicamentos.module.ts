import { CrearMedicamentosComponent } from './containers/crear-medicamentos/crear-medicamentos.component';
import { ListadoMedicamentosComponent } from './containers/listado-medicamentos/listado-medicamentos.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MedicamentosPage } from './medicamentos.page';

import { MedicamentosPageRoutingModule } from './medicamentos-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	imports: [
		IonicModule,
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule.forChild([ { path: '', component: MedicamentosPage } ]),
		MedicamentosPageRoutingModule,
		SharedModule
	],
	declarations: [ MedicamentosPage, ListadoMedicamentosComponent, CrearMedicamentosComponent ]
})
export class MedicamentosPageModule {}
