import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { MascotasService } from './../../../services/mascotas.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { CamaraService } from './../../../../shared/services/camara.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-crear-mascota',
	templateUrl: './crear-mascota.component.html',
	styleUrls: [ './crear-mascota.component.scss' ]
})
export class CrearMascotaComponent implements OnInit {
	public formCrearMascota: FormGroup;
	public dueno: any;

	private isUpdate = false;

	constructor(
		private _camaraService: CamaraService,
		private _navController: NavController,
		private _formBuilder: FormBuilder,
		private _mascotasService: MascotasService,
		private _activatedRoute: ActivatedRoute
	) {}

	ngOnInit() {
		this.dueno = this._activatedRoute.snapshot.data.dueno;
		this.formCrearMascota = this._formBuilder.group({
			nombres: new FormControl(''),
			raza: new FormControl(''),
			sexo: new FormControl(''),
			fechaNacimiento: new FormControl(''),
			imagen: new FormControl(undefined),
			duenoId: new FormControl(this.dueno.id)
		});

		if (this._activatedRoute.snapshot.data.mascota) {
			this.isUpdate = true;

			this.formCrearMascota.patchValue(this._activatedRoute.snapshot.data.mascota);
		}
	}

	public async tomarFoto() {
		const photo = await this._camaraService.takePhoto();
		this.formCrearMascota.get('imagen').setValue(`data:image/${photo.format};base64,${photo.base64String}`);
	}

	public crearMascota() {
		if (this.isUpdate) {
			const mascotaId = this._activatedRoute.snapshot.data.mascota.id;

			this._mascotasService.actualizarMascota(mascotaId, this.formCrearMascota.value).subscribe((response) => {
				this._navController.navigateForward(`/pacientes/detalle-dueno/${this.dueno.id}`);
			});
		} else {
			this._mascotasService.crearMascota(this.formCrearMascota.value).subscribe((data) => {
				console.log(data);
				this._navController.navigateForward(`pacientes/detalle-dueno/${this.dueno.id}`);
			});
		}
	}

	public get nombres() {
		return this.formCrearMascota.get('nombres');
	}

	public get raza() {
		return this.formCrearMascota.get('raza');
	}

	public get sexo() {
		return this.formCrearMascota.get('sexo');
	}

	public get fechaNacimiento() {
		return this.formCrearMascota.get('fechaNacimiento');
	}

	public get imagen() {
		return this.formCrearMascota.get('imagen');
	}
}
