import { ApiTags } from '@nestjs/swagger';
import {
	CrearDuenoRequestBodyDto,
	ObtenerDuenoRequestParamsDto,
	ActualizarDuenoRequestParamsDto,
	ActualizarDuenoRequestBodyDto,
	ObtenerDuenoRequestQuertyDto
} from './../dtos/duenos-request.dto';
import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { DuenosService } from '../services/duenos.service';

@ApiTags('Dueños de mascotas')
@Controller('duenos')
export class DuenosController {
	constructor(private _duenosService: DuenosService) {}

	@Post()
	private _crearDueno(@Body() dueno: CrearDuenoRequestBodyDto) {
		return this._duenosService.crearDueno(dueno);
	}

	@Get()
	private _obtenerDuenos(@Query() query: ObtenerDuenoRequestQuertyDto) {
		return this._duenosService.obtenerDuenos(query);
	}

	@Get(':duenoId')
	private _obtenerUnDueno(@Param() params: ObtenerDuenoRequestParamsDto) {
		return this._duenosService.obtenerUnDueno(params);
	}

	@Put(':duenoId')
	private _actualizarDueno(
		@Param() params: ActualizarDuenoRequestParamsDto,
		@Body() dueno: ActualizarDuenoRequestBodyDto
	) {
		return this._duenosService.actualizarDueno(params, dueno);
	}
}
