import { MedicamentosResolver } from './resolvers/medicamentos.resolver';
import { ListadoMedicamentosComponent } from './containers/listado-medicamentos/listado-medicamentos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearMedicamentosComponent } from './containers/crear-medicamentos/crear-medicamentos.component';
import { MedicamentosPage } from './medicamentos.page';

const routes: Routes = [
	{
		path: '',
		component: MedicamentosPage,
		children: [
			{
				path: 'listado-medicamentos',
				component: ListadoMedicamentosComponent,
				resolve: {
					medicamentos: MedicamentosResolver
				}
			},
			{
				path: 'crear-medicamento',
				component: CrearMedicamentosComponent
			},
			{
				path: 'editar-medicamento',
				component: CrearMedicamentosComponent
			},
			{
				path: '',
				redirectTo: 'listado-medicamentos'
			}
		]
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class MedicamentosPageRoutingModule {}
