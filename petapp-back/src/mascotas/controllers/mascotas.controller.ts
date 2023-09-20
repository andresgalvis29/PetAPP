import { ApiTags } from '@nestjs/swagger';
import { MascotasService } from './../services/mascotas.service';
import {
	CrearMascotaRequestBodyDto,
	ObtenerMascotasPorDuenoRequestParamsDto,
	ObtenerMascotaPorIdRequestParamsDto,
	ActualizarMascotaRequestBodyDto,
	ActualizarMascotaRequestParamsDto
} from './../dtos/mascota-request.dto';
import { Body, Controller, Post, Param, Get, Put } from '@nestjs/common';

@ApiTags('Mascotas')
@Controller('mascotas')
export class MascotasController {
	constructor(private _mascotasService: MascotasService) {}

	@Post()
	private _crearMascota(@Body() mascota: CrearMascotaRequestBodyDto) {
		return this._mascotasService.crearMascota(mascota);
	}

	@Get('dueno/:duenoId')
	private _obtenerMascotasPorDueno(@Param() params: ObtenerMascotasPorDuenoRequestParamsDto) {
		return this._mascotasService.obtenerMascotasPorDueno(params);
	}

	@Get(':mascotaId')
	private _obtenerMascotaPorId(@Param() params: ObtenerMascotaPorIdRequestParamsDto) {
		return this._mascotasService.obtenerMascotaPorId(params);
	}

	@Put(':mascotaId')
	private _actualizarMascota(
		@Param() params: ActualizarMascotaRequestParamsDto,
		@Body() mascota: ActualizarMascotaRequestBodyDto
	) {
		return this._mascotasService.actualizarMascota(params, mascota);
	}
}
