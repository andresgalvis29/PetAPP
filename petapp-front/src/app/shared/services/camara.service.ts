import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';

@Injectable({
	providedIn: 'root'
})
export class CamaraService {
	private _photoOptions = {
		quality: 80, // FIXME: Should be defined by configuration.
		resultType: CameraResultType.Base64,
		source: CameraSource.Camera,
		promptLabelHeader: `Foto`,
		promptLabelPicture: `Tomar Foto`,
		promptLabelCancel: `Cancelar`
	};

	constructor() {}

	public async takePhoto(): Promise<Photo> {
		return (await Camera.getPhoto(this._photoOptions)) as Photo;
	}
}
