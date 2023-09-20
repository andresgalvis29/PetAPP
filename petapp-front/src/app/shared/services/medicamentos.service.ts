import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class MedicamentosService {
	constructor(private _httpClient: HttpClient) {}

	public consultarMedicamentosPorNombre(nombre: string): Observable<any> {
		return this._httpClient.get(`${environment.API}/medicamentos?nombre=${nombre}`);
	}
}
