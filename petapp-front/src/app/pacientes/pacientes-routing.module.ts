import { MascotaResolver } from './resolvers/mascota.resolver';
import { MascotasResolver } from './resolvers/mascotas.resolver';
import { DuenosResolver } from './resolvers/duenos.resolver';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearDuenoComponent } from './containers/containers/crear-dueno/crear-dueno.component';
import { CrearMascotaComponent } from './containers/containers/crear-mascota/crear-mascota.component';
import { DetalleDuenoComponent } from './containers/containers/detalle-dueno/detalle-dueno.component';
import { ListadoDuenosComponent } from './containers/containers/listado-duenos/listado-duenos.component';
import { PacientesPage } from './pacientes.page';

const routes: Routes = [
	{
		path: '',
		component: PacientesPage,
		children: [
			{
				path: 'listar-duenos',
				component: ListadoDuenosComponent,
				resolve: {
					duenos: DuenosResolver
				}
			},
			{
				path: 'crear-dueno',
				component: CrearDuenoComponent
			},
			{
				path: 'editar-dueno/:duenoId',
				component: CrearDuenoComponent,
				resolve: {
					dueno: DuenosResolver
				}
			},
			{
				path: 'detalle-dueno/:duenoId',
				component: DetalleDuenoComponent,
				resolve: {
					dueno: DuenosResolver,
					mascotas: MascotasResolver
				}
			},
			{
				path: 'crear-mascota/:duenoId',
				component: CrearMascotaComponent,
				resolve: {
					dueno: DuenosResolver
				}
			},
			{
				path: 'editar-mascota/:duenoId/:mascotaId',
				component: CrearMascotaComponent,
				resolve: {
					mascota: MascotaResolver,
					dueno: DuenosResolver
				},
				runGuardsAndResolvers: 'always'
			},
			{
				path: '',
				redirectTo: 'listar-duenos'
			}
		]
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class PacientesPageRoutingModule {}
