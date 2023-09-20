import { ApiTags } from '@nestjs/swagger';
import { CitasService } from './../services/citas.service';
import { CrearCitaRequestBodyDto } from './../dtos/citas-request.dto';
import { Body, Controller, Post, Get, Param, Patch } from '@nestjs/common';

@ApiTags('Citas')
@Controller('citas')
export class CitasController {
	constructor(private _citasService: CitasService) {}

	@Post()
	private _crearCita(@Body() body: CrearCitaRequestBodyDto) {
		this._citasService.crearCita(body);
	}

	@Post(':citaId/medicamentos/:medicamentoId')
	private _agregarMedicamentoACita(@Param('citaId') citaId: string, @Param('medicamentoId') medicamentoId: string) {
		console.log(citaId, medicamentoId);
		return this._citasService.agregarMedicamentoACita(citaId, medicamentoId);
	}

	@Get(':citaId/medicamentos')
	private _obtenerMedicamentosDeCita(@Param('citaId') citaId: string) {
		return this._citasService.obtenerMedicamentosDeCita(citaId);
	}

	@Patch('medicamentos-cita/:medicamentosCitaId')
	private _actualizarMedicamentosCita(@Param('medicamentosCitaId') medicamentosCitaId: string, @Body() body: any) {
		return this._citasService.actualizarMedicamentosCita(medicamentosCitaId, body);
	}

	@Get()
	private _obtenerCitas() {
		return this._citasService.obtenerCitas();
	}

	@Get(':citaId')
	private _obtenerCita(citaId: string) {
		return this._citasService.obtenerCita(citaId);
	}
}
