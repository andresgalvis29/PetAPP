import { CitasService } from './../../services/citas.service';
import { BusquedaMedicamentosComponent } from './../../components/busqueda-medicamentos/busqueda-medicamentos.component';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-detalle-cita',
	templateUrl: './detalle-cita.component.html',
	styleUrls: [ './detalle-cita.component.scss' ]
})
export class DetalleCitaComponent implements OnInit {
	public cita: any;

	public medicamentosCita: any[] = [];

	constructor(
		private _activatedRoute: ActivatedRoute,
		private _modalController: ModalController,
		private _citasService: CitasService
	) {}

	ngOnInit() {
		this.cita = this._activatedRoute.snapshot.data.cita;
		this._refrescarMedicamentos();
	}

	public async agregarMedicamento() {
		const modal = await this._modalController.create({
			component: BusquedaMedicamentosComponent
		});

		modal.present();

		modal.onDidDismiss().then(async (data) => {
			if (data.data) {
				console.log(data.data);
				this._citasService
					.agregarMedicamentoACita(this.cita.id, data.data.id)
					.subscribe(async (medicamentoCita) => {
						this._refrescarMedicamentos();
					});
			}
		});
	}

	private _refrescarMedicamentos() {
		this._citasService.obtenerMedicamentosPorCita(this.cita.id).subscribe((medicamentosCita) => {
			console.log(medicamentosCita);
			this.medicamentosCita = medicamentosCita;
		});
	}

	public actualizarMedicamento(event: any, medicamentoCita: any) {
		console.log('cantidad: ', event.target[0].value);
		console.log('frecuencia: ', event.target[1].value);
		this._citasService
			.actualizarMedicamentoCita(medicamentoCita.id, {
				cantidad: event.target[0].value,
				frecuencia: event.target[1].value
			})
			.subscribe((medicamentoCita) => {
				this._refrescarMedicamentos();
			});
	}
}
