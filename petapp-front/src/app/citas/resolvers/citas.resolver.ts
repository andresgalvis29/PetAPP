import { CitasService } from './../services/citas.service';
import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class CitasResolver implements Resolve<boolean> {
	constructor(private _citasService: CitasService) {}

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
		if (route.params.citaId) {
			return this._citasService.obtenerCitasPorId(route.params.citaId);
		} else {
			return this._citasService.obtenerCitas();
		}
	}
}
