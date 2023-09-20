import { ModalController } from '@ionic/angular';
import { PacientesService } from 'src/app/shared/services/pacientes.service';
import { Component, OnInit } from '@angular/core';
import { MedicamentosService } from 'src/app/shared/services/medicamentos.service';

@Component({
	selector: 'app-busqueda-medicamentos',
	templateUrl: './busqueda-medicamentos.component.html',
	styleUrls: [ './busqueda-medicamentos.component.scss' ]
})
export class BusquedaMedicamentosComponent implements OnInit {
	public medicamentos: any[] = [];
	constructor(private _modalController: ModalController, private _medicamentosSharedService: MedicamentosService) {}

	ngOnInit() {
		this._medicamentosSharedService.consultarMedicamentosPorNombre('').subscribe((data) => {
			this.medicamentos = data;
			console.log(this.medicamentos);
		});
	}

	public buscarMedicamentos(event) {
		this._medicamentosSharedService.consultarMedicamentosPorNombre(event.target.value).subscribe((data) => {
			this.medicamentos = data;
		});
	}

	public seleccionarMedicamento(medicamento) {
		console.log(medicamento);
		this._modalController.dismiss({ ...medicamento, frecuencia: 0, cantidad: 0 });
	}
}
