import { ApiTags } from '@nestjs/swagger';
import { MedicamentosService } from './../services/medicamentos.service';
import { CrearMedicamentoRequestBodyDto, ObtenerMedicamentosQueryDto } from './../dtos/medicamentos.dto';
import { Body, Controller, Post, Get, Query } from '@nestjs/common';

@ApiTags('Medicamentos')
@Controller('medicamentos')
export class MedicamentosController {
	constructor(private _medicamentosService: MedicamentosService) {}

	@Post()
	private _crearMedicamento(@Body() medicamento: CrearMedicamentoRequestBodyDto) {
		return this._medicamentosService.crearMedicamento(medicamento);
	}

	@Get()
	private _obtenerMedicamentos(@Query() query: ObtenerMedicamentosQueryDto) {
		return this._medicamentosService.obtenerMedicamentos(query);
	}
}
