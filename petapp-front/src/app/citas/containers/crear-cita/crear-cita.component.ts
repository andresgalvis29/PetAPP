import { CitasService } from './../../services/citas.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { BusquedaPacientesComponent } from '../../components/busqueda-pacientes/busqueda-pacientes.component';

@Component({
	selector: 'app-crear-cita',
	templateUrl: './crear-cita.component.html',
	styleUrls: [ './crear-cita.component.scss' ]
})
export class CrearCitaComponent implements OnInit {
	public formCrearCita: FormGroup;
	public mascotaSeleccionada: any = undefined;

	constructor(
		private _modalController: ModalController,
		private _formBuilder: FormBuilder,
		private _citasService: CitasService,
		private _navController: NavController
	) {}

	ngOnInit() {
		this.formCrearCita = this._formBuilder.group({
			mascotaId: new FormControl(''),
			fecha: new FormControl(''),
			motivo: new FormControl('')
		});
	}

	public crearCita() {
		this._citasService.crearCita(this.formCrearCita.value).subscribe((data) => {
			this._navController.navigateForward('/citas/listado-citas');
		});
	}

	public async buscarPaciente() {
		const modal = await this._modalController.create({
			component: BusquedaPacientesComponent
		});

		modal.present();

		modal.onDidDismiss().then((data) => {
			console.log(data);
			this.mascotaId.setValue(data.data.id);
			this.mascotaSeleccionada = data.data;
			console.log(this.mascotaSeleccionada);
		});
	}

	public get mascotaId() {
		return this.formCrearCita.get('mascotaId');
	}

	public get fecha() {
		return this.formCrearCita.get('fecha');
	}

	public get motivo() {
		return this.formCrearCita.get('motivo');
	}
}
