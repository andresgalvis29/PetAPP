import { MedicamentosService } from './../../services/medicamentos.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-crear-medicamentos',
	templateUrl: './crear-medicamentos.component.html',
	styleUrls: [ './crear-medicamentos.component.scss' ]
})
export class CrearMedicamentosComponent implements OnInit {
	public formCrearMedicamento: FormGroup;

	constructor(
		private _navController: NavController,
		private formBuilder: FormBuilder,
		private _medicamentosService: MedicamentosService
	) {}

	ngOnInit() {
		this.formCrearMedicamento = this.formBuilder.group({
			nombre: new FormControl(''),
			tipo: new FormControl(''),
			unidadMedida: new FormControl('')
		});
	}

	public crearMedicamento() {
		this._medicamentosService.crearMedicamento(this.formCrearMedicamento.value).subscribe((data) => {
			this._navController.navigateForward('/medicamentos/listado-medicamentos');
		});
	}
}
