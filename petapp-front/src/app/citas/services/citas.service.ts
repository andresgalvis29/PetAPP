import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class CitasService {
	constructor(private _httpClient: HttpClient) {}

	public crearCita(cita): Observable<any> {
		return this._httpClient.post(`${environment.API}/citas`, cita);
	}

	public obtenerCitas(): Observable<any> {
		return this._httpClient.get(`${environment.API}/citas`);
	}

	public obtenerCitasPorId(citaId: string): Observable<any> {
		return this._httpClient.get(`${environment.API}/citas/${citaId}`);
	}

	public agregarMedicamentoACita(citaId: string, medicamentoId: string): Observable<any> {
		return this._httpClient.post(`${environment.API}/citas/${citaId}/medicamentos/${medicamentoId}`, {});
	}

	public obtenerMedicamentosPorCita(citaId: string): Observable<any> {
		return this._httpClient.get(`${environment.API}/citas/${citaId}/medicamentos`);
	}

	public actualizarMedicamentoCita(medicamentosCitaId: string, datos: any): Observable<any> {
		return this._httpClient.patch(`${environment.API}/citas/medicamentos-cita/${medicamentosCitaId}`, datos);
	}
}
