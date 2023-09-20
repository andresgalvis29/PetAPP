import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
export class CrearMedicamentoRequestBodyDto {
	@IsString()
	@IsNotEmpty()
	@ApiProperty()
	nombre: string;

	@IsString()
	@IsNotEmpty()
	@ApiProperty()
	tipo: string;

	@IsString()
	@IsNotEmpty()
	@ApiProperty()
	unidadMedida: string;
}

export class ObtenerMedicamentosQueryDto {
	@IsString()
	@IsOptional()
	@ApiProperty()
	nombre: string;
}
