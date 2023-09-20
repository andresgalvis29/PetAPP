import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsOptional, IsDateString, IsEnum, IsString, IsNotEmpty, IsUUID } from 'class-validator';
import { SexoMascotaEnum } from '../models/sexo-mascota.enum';
export class CrearMascotaRequestBodyDto {
	@IsString()
	@IsNotEmpty()
	@ApiProperty()
	nombres: string;

	@IsString()
	@IsNotEmpty()
	@ApiProperty()
	raza: string;

	@IsString()
	@IsNotEmpty()
	@ApiProperty()
	imagen: string;

	@IsString()
	@IsNotEmpty()
	@ApiProperty()
	fechaNacimiento: string;

	@IsString()
	@IsNotEmpty()
	@IsEnum(SexoMascotaEnum)
	@ApiProperty()
	sexo: string;

	@IsString()
	@IsUUID()
	@IsNotEmpty()
	@ApiProperty()
	duenoId: string;
}

export class ObtenerMascotasPorDuenoRequestParamsDto {
	@IsString()
	@IsNotEmpty()
	@IsUUID()
	@ApiProperty()
	duenoId: string;
}

export class ObtenerMascotaPorIdRequestParamsDto {
	@IsString()
	@IsNotEmpty()
	@IsUUID()
	@ApiProperty()
	mascotaId: string;
}

export class ActualizarMascotaRequestParamsDto extends ObtenerMascotaPorIdRequestParamsDto {}

export class ActualizarMascotaRequestBodyDto extends PartialType(CrearMascotaRequestBodyDto) {}
