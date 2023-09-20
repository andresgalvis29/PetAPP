import { Controller, Get, Req, UseGuards } from '@nestjs/common';

import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { Rol } from '../../auth/models/roles.model';
import { Roles } from '../../auth/decorators/roles.decorator';
import { RolesGuard } from '../../auth/guards/roles.guard';
import { Request } from 'express';
import { Usuario } from '@database/entities/usuarios/usuario.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Usuarios')
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('usuarios')
export class UsuariosController {
  @Get('perfil')
  @Roles(Rol.FACILITADOR, Rol.ARQUITECTO_DESARROLLADOR)
  obtenerUsuarioAutenticado(@Req() req: Request) {
    const usuario = req.user as Usuario;
    return usuario;
  }
}
