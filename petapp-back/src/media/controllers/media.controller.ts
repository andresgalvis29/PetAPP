import { MediaService } from './../services/media.service';
import { ApiTags } from '@nestjs/swagger';
import { Controller, Get, Param, Res } from '@nestjs/common';

@ApiTags('Media')
@Controller('media')
export class MediaController {
	constructor(private _mediaService: MediaService) {}

	@Get('foto-perfil/dueno/:duenoId')
	private async _getFotoPerfilDueno(@Param('duenoId') duenoId: string, @Res() res): Promise<string> {
		const url = await this._mediaService.obtenerFotoDuenoPorId(duenoId);
		console.log(url);
		return res.sendFile(url, { root: './' });
	}

	@Get('foto-perfil/mascota/:mascotaId')
	private async _getFotoPerfilMascota(@Param('mascotaId') mascotaId: string, @Res() res): Promise<string> {
		const url = await this._mediaService.obtenerFotoMascotaPorId(mascotaId);
		console.log(url);
		return res.sendFile(url, { root: './' });
	}
}
