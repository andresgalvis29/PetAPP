import { TabsPage } from './tabs.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: TabsPage,
		children: [
			{
				path: 'citas',
				loadChildren: () => import('../citas/citas.module').then((m) => m.CitasPageModule)
			},
			{
				path: 'pacientes',
				loadChildren: () => import('../pacientes/pacientes.module').then((m) => m.PacientesPageModule)
			},
			{
				path: 'medicamentos',
				loadChildren: () => import('../medicamentos/medicamentos.module').then((m) => m.MedicamentosPageModule)
			},
			{
				path: '',
				redirectTo: 'citas/listado-citas',
				pathMatch: 'full'
			}
		]
	},
	{
		path: '',
		redirectTo: '/tabs/tab1',
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ]
})
export class TabsPageRoutingModule {}
