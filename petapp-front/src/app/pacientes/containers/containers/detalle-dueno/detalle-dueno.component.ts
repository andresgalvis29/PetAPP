import { NavController, ViewWillEnter } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-detalle-dueno',
	templateUrl: './detalle-dueno.component.html',
	styleUrls: [ './detalle-dueno.component.scss' ]
})
export class DetalleDuenoComponent implements OnInit, ViewWillEnter {
	public dueno: any;
	public mascotas: any[] = [];

	constructor(private _navController: NavController, private _activatedRoute: ActivatedRoute) {}

	ngOnInit() {
		this.ionViewWillEnter();
	}

	ionViewWillEnter() {
		this.dueno = this._activatedRoute.snapshot.data.dueno;
		this.mascotas = this._activatedRoute.snapshot.data.mascotas;
	}

	crearMascota() {
		this._navController.navigateForward(`/pacientes/crear-mascota/${this.dueno.id}`);
	}

	editarDueno() {
		this._navController.navigateForward(`pacientes/editar-dueno/${this.dueno.id}`);
	}

	editarMascota(mascota: any) {
		this._navController.navigateForward(`/pacientes/editar-mascota/${this.dueno.id}/${mascota.id}`);
	}
}
