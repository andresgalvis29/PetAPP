import { environment } from './../../../environments/environment.prod';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class PacientesService {
	constructor(private _httpClient: HttpClient) {}

	public consultarPacientesPorIdentificacion(identificacion: string): Observable<any> {
		return this._httpClient.get(`${environment.API}/duenos?identificacion=${identificacion}`);
	}
}
