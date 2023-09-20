import { ActivatedRoute } from '@angular/router';
import { DuenosService } from './../../../services/duenos.service';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { CamaraService } from 'src/app/shared/services/camara.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-crear-dueno',
	templateUrl: './crear-dueno.component.html',
	styleUrls: [ './crear-dueno.component.scss' ]
})
export class CrearDuenoComponent implements OnInit {
	public formCrearDueno: FormGroup;

	private dueno: any;

	private isUpdate = false;

	constructor(
		private _camaraService: CamaraService,
		private _navController: NavController,
		private _fromBuilder: FormBuilder,
		private _duenosService: DuenosService,
		private _activatedRoute: ActivatedRoute
	) {}

	ngOnInit() {
		this.dueno = this._activatedRoute.snapshot.data.dueno;

		this.formCrearDueno = this._fromBuilder.group({
			nombres: new FormControl(''),
			identificacion: new FormControl(''),
			telefono: new FormControl(''),
			imagen: new FormControl(undefined)
		});

		if (this._activatedRoute.snapshot.data.dueno) {
			this.isUpdate = true;

			this.formCrearDueno.patchValue(this._activatedRoute.snapshot.data.dueno);
		}
	}

	public crearDueno() {
		if (this.isUpdate) {
			this._duenosService.actualizarDueno(this.dueno.id, this.formCrearDueno.value).subscribe((response) => {
				this._navController.navigateForward(`/pacientes/detalle-dueno/${this.dueno.id}`);
			});
		} else {
			this._duenosService.crearDueno(this.formCrearDueno.value).subscribe((data) => {
				this._navController.navigateForward(`pacientes/detalle-dueno/${data.id}`);
			});
		}
	}

	public async tomarFoto() {
		const photo = await this._camaraService.takePhoto();
		if (photo) {
			this.imagen.setValue(`data:image/${photo.format};base64,${photo.base64String}`);
		}
	}

	public get nombres() {
		return this.formCrearDueno.get('nombres');
	}

	public get identificacion() {
		return this.formCrearDueno.get('identificacion');
	}

	public get telefono() {
		return this.formCrearDueno.get('telefono');
	}

	public get imagen() {
		return this.formCrearDueno.get('imagen');
	}
}
