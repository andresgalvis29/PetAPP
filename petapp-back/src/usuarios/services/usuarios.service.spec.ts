import { Usuario } from '../../database/entities/usuarios/usuario.entity';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { MockType } from '../../common/utils/testing-utils/models/mock.type';
import { repositoryMockFactory } from '../../common/utils/testing-utils/models/repository-mock-factory';
import { Repository } from 'typeorm';

import { UsuariosService } from './usuarios.service';
import { NotFoundException } from '@nestjs/common';

describe('UsersService', () => {
  let service: UsuariosService;

  let usuariosRepo: MockType<Repository<Usuario>>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsuariosService,
        {
          provide: getRepositoryToken(Usuario),
          useFactory: repositoryMockFactory,
        },
      ],
    }).compile();

    service = module.get<UsuariosService>(UsuariosService);

    usuariosRepo = module.get(getRepositoryToken(Usuario));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();

    expect(usuariosRepo).toBeDefined();
  });

  it('en el metodo buscarPorEmailOCrear si el usuario existe debería retornar el usuario y no crear uno nuevo', async () => {
    usuariosRepo.findOne.mockReturnValue(new Usuario());
    const findUsuarioRepoSpy = jest.spyOn(usuariosRepo, 'findOne');
    const crearUsuarioRepoSpy = jest.spyOn(usuariosRepo, 'save');

    const email = 'ejemplo@ejemplo.com';

    const usuario = await service.buscarPorEmailOCrear(email);

    expect(usuario).toBeDefined();
    expect(usuario).toBeInstanceOf(Usuario);
    expect(findUsuarioRepoSpy).toHaveBeenCalledWith({ where: { email } });
    expect(crearUsuarioRepoSpy).not.toHaveBeenCalled();
  });

  it('en el metodo buscarPorEmailOCrear si el usuario no existe debería crear uno nuevo', async () => {
    usuariosRepo.findOne.mockReturnValue(null);
    usuariosRepo.save.mockReturnValue(new Usuario());
    const findUsuarioRepoSpy = jest.spyOn(usuariosRepo, 'findOne');
    const crearUsuarioRepoSpy = jest.spyOn(usuariosRepo, 'save');

    const email = 'ejemplo@ejemplo.com';

    const usuario = await service.buscarPorEmailOCrear(email);

    expect(usuario).toBeDefined();
    expect(usuario).toBeInstanceOf(Usuario);
    expect(findUsuarioRepoSpy).toHaveBeenCalledWith({ where: { email } });
    expect(crearUsuarioRepoSpy).toHaveBeenCalled();
  });

  it('en el metodo buscarPorId debería retornar un NotFoundException si no encuentra el usuario', async () => {
    usuariosRepo.findOne.mockReturnValue(null);
    const findUsuarioRepoSpy = jest.spyOn(usuariosRepo, 'findOne');

    const id = '123';

    const usuario = service.buscarPorId(id);

    await expect(usuario).rejects.toThrow(
      new NotFoundException(`No existe el usuario ${id}`),
    );
    expect(findUsuarioRepoSpy).toHaveBeenCalledWith(id);
  });
});
