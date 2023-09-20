import { IsEmail, IsString } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CrearUsuarioDto {
  @IsString()
  @IsEmail()
  @ApiProperty({ description: 'El email del usuario' })
  readonly email: string;
}
