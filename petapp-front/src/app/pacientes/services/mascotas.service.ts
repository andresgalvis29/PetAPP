import { environment } from './../../../environments/environment.prod';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class MascotasService {
	constructor(private _httpClient: HttpClient) {}

	public crearMascota(mascota): Observable<any> {
		return this._httpClient.post(`${environment.API}/mascotas`, mascota);
	}

	public obtenerMascotasPorDueno(duenoId: string): Observable<any> {
		return this._httpClient.get(`${environment.API}/mascotas/dueno/${duenoId}`);
	}

	public obtenerMascotaPorId(mascotaId: string): Observable<any> {
		return this._httpClient.get(`${environment.API}/mascotas/${mascotaId}`);
	}

	public actualizarMascota(mascotaId: string, mascota): Observable<any> {
		return this._httpClient.put(`${environment.API}/mascotas/${mascotaId}`, mascota);
	}
}
