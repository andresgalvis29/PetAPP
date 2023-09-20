import { MedicamentosService } from './../services/medicamentos.service';
import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class MedicamentosResolver implements Resolve<boolean> {
	constructor(private _medicamentosService: MedicamentosService) {}

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
		return this._medicamentosService.obtenerMedicamentos();
	}
}
