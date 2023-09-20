import { DuenosService } from './../services/duenos.service';
import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class DuenosResolver implements Resolve<boolean> {
	constructor(private _duenosService: DuenosService) {}

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
		if (route.params.duenoId) {
			return this._duenosService.getDueno(route.params.duenoId);
		} else {
			return this._duenosService.getDuenos();
		}
	}
}
