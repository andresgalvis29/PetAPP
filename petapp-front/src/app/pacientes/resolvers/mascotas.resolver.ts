import { MascotasService } from './../services/mascotas.service';
import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class MascotasResolver implements Resolve<boolean> {
	constructor(private _mascotasService: MascotasService) {}

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
		if (route.params.duenoId) {
			return this._mascotasService.obtenerMascotasPorDueno(route.params.duenoId);
		}
	}
}
