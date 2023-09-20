import { Test, TestingModule } from '@nestjs/testing';
import { DuenosService } from './duenos.service';

describe('DuenosService', () => {
  let service: DuenosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DuenosService],
    }).compile();

    service = module.get<DuenosService>(DuenosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
