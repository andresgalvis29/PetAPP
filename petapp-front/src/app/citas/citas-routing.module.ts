import { CitasResolver } from './resolvers/citas.resolver';
import { DetalleCitaComponent } from './containers/detalle-cita/detalle-cita.component';
import { CrearCitaComponent } from './containers/crear-cita/crear-cita.component';
import { ListadoCitasComponent } from './containers/listado-citas/listado-citas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitasPage } from './citas.page';

const routes: Routes = [
	{
		path: '',
		component: CitasPage,
		children: [
			{
				path: 'listado-citas',
				component: ListadoCitasComponent,
				resolve: {
					citas: CitasResolver
				}
			},
			{
				path: 'crear-cita',
				component: CrearCitaComponent
			},
			{
				path: 'detalle-cita/:citaId',
				component: DetalleCitaComponent,
				resolve: {
					cita: CitasResolver
				}
			},
			{
				path: '',
				redirectTo: 'listado-citas'
			}
		]
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class CitasPageRoutingModule {}
