import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';
export class CrearCitaRequestBodyDto {
	@IsString()
	@IsNotEmpty()
	@ApiProperty()
	fecha: string;

	@IsString()
	@IsNotEmpty()
	@ApiProperty()
	motivo: string;

	@IsString()
	@IsNotEmpty()
	@ApiProperty()
	mascotaId: string;
}
