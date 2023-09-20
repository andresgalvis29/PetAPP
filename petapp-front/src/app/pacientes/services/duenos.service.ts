import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class DuenosService {
	constructor(private _httpClient: HttpClient) {}

	public crearDueno(dueno): Observable<any> {
		return this._httpClient.post(`${environment.API}/duenos`, dueno);
	}

	public getDueno(duenoId: string): Observable<any> {
		return this._httpClient.get(`${environment.API}/duenos/${duenoId}`);
	}

	public getDuenos(): Observable<any> {
		return this._httpClient.get(`${environment.API}/duenos`);
	}

	public actualizarDueno(duenoId: string, dueno): Observable<any> {
		return this._httpClient.put(`${environment.API}/duenos/${duenoId}`, dueno);
	}
}
