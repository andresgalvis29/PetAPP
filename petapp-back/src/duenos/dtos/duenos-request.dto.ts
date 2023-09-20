import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CrearDuenoRequestBodyDto {
	@IsString()
	@IsNotEmpty()
	@ApiProperty()
	nombres: string;

	@IsString()
	@IsNotEmpty()
	@ApiProperty()
	identificacion: string;

	@IsString()
	@IsNotEmpty()
	@ApiProperty()
	telefono: string;

	@IsString()
	@IsOptional()
	@ApiProperty()
	imagen: string;
}

export class ObtenerDuenoRequestParamsDto {
	@IsString()
	@IsNotEmpty()
	@ApiProperty()
	duenoId: string;
}

export class ObtenerDuenoRequestQuertyDto {
	@IsString()
	@IsOptional()
	@ApiProperty()
	identificacion: string;
}

export class ActualizarDuenoRequestParamsDto extends ObtenerDuenoRequestParamsDto {}

export class ActualizarDuenoRequestBodyDto extends PartialType(CrearDuenoRequestBodyDto) {}
