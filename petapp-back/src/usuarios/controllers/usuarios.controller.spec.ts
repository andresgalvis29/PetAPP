import { Test, TestingModule } from '@nestjs/testing';
import { Request } from 'express';

import { UsuariosController } from './usuarios.controller';

describe('UsersController', () => {
  let usuariosController: UsuariosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsuariosController],
    }).compile();

    usuariosController = module.get<UsuariosController>(UsuariosController);
  });

  it('debería ser definido', () => {
    expect(usuariosController).toBeDefined();
  });

  it('el metodo obtenerUsuarioAutenticado debería retornar el usuario autenticado', () => {
    const request = { user: {} } as Request;

    const usuario = usuariosController.obtenerUsuarioAutenticado(request);

    expect(usuario).toBe(request.user);
  });
});
