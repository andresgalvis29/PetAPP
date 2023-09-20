import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { PacientesService } from 'src/app/shared/services/pacientes.service';

@Component({
	selector: 'app-busqueda-pacientes',
	templateUrl: './busqueda-pacientes.component.html',
	styleUrls: [ './busqueda-pacientes.component.scss' ]
})
export class BusquedaPacientesComponent implements OnInit {
	public pacientes: any[] = [];
	constructor(private _pacientesSharedService: PacientesService, private _modalController: ModalController) {}

	ngOnInit() {
		this._pacientesSharedService.consultarPacientesPorIdentificacion('').subscribe((data) => {
			this.pacientes = data;
		});
	}

	public buscarPacientes(event) {
		this._pacientesSharedService.consultarPacientesPorIdentificacion(event.target.value).subscribe((data) => {
			this.pacientes = data;
		});
	}

	public mascotaSeleccionada(mascota) {
		this._modalController.dismiss(mascota);
	}
}
