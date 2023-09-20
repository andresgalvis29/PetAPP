import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NavController, ViewWillEnter } from '@ionic/angular';

@Component({
	selector: 'app-listado-duenos',
	templateUrl: './listado-duenos.component.html',
	styleUrls: [ './listado-duenos.component.scss' ]
})
export class ListadoDuenosComponent implements OnInit, ViewWillEnter {
	public listadoDuenos: any[] = [];

	constructor(private _navController: NavController, private _activatedRoute: ActivatedRoute) {}

	ngOnInit() {
		this.ionViewWillEnter();
	}

	ionViewWillEnter() {
		this.listadoDuenos = this._activatedRoute.snapshot.data.duenos;
	}

	verDetalle(dueno: any) {
		this._navController.navigateForward(`/pacientes/detalle-dueno/${dueno.id}`);
	}

	crearDueno() {
		this._navController.navigateForward('/pacientes/crear-dueno');
	}
}
