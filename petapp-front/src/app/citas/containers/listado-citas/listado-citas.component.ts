import { ActivatedRoute } from '@angular/router';
import { NavController, ViewWillEnter } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-listado-citas',
	templateUrl: './listado-citas.component.html',
	styleUrls: [ './listado-citas.component.scss' ]
})
export class ListadoCitasComponent implements OnInit, ViewWillEnter {
	public citas: any[] = [];

	constructor(private _navController: NavController, private _activatedRoute: ActivatedRoute) {}

	ngOnInit() {
		this.ionViewWillEnter();
	}

	ionViewWillEnter() {
		this.citas = this._activatedRoute.snapshot.data.citas;
	}

	public agregarCita() {
		this._navController.navigateForward('/citas/crear-cita');
	}

	public detalleCita(cita: any) {
		this._navController.navigateForward(`/citas/detalle-cita/${cita.id}`);
	}
}
