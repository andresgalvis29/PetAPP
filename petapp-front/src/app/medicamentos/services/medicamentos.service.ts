import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class MedicamentosService {
	constructor(private _httpClient: HttpClient) {}

	public crearMedicamento(medicamento): Observable<any> {
		return this._httpClient.post(`${environment.API}/medicamentos`, medicamento);
	}

	public obtenerMedicamentos(): Observable<any> {
		return this._httpClient.get(`${environment.API}/medicamentos`);
	}
}
