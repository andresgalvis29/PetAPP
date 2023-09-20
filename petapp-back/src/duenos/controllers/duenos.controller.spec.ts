import { Test, TestingModule } from '@nestjs/testing';
import { DuenosController } from './duenos.controller';

describe('DuenosController', () => {
  let controller: DuenosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DuenosController],
    }).compile();

    controller = module.get<DuenosController>(DuenosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
