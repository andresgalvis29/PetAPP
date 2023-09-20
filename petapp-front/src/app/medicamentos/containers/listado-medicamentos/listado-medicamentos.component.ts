import { ActivatedRoute } from '@angular/router';
import { NavController, ViewWillEnter } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-listado-medicamentos',
	templateUrl: './listado-medicamentos.component.html',
	styleUrls: [ './listado-medicamentos.component.scss' ]
})
export class ListadoMedicamentosComponent implements OnInit, ViewWillEnter {
	public medicamentos: any[] = [];

	constructor(private _navController: NavController, private _activatedRoute: ActivatedRoute) {}

	ngOnInit() {
		this.ionViewWillEnter();
	}

	ionViewWillEnter(): void {
		this.medicamentos = this._activatedRoute.snapshot.data.medicamentos;
		console.log(this.medicamentos);
	}

	public agregarMedicamento() {
		this._navController.navigateForward('/medicamentos/crear-medicamento');
	}
}
