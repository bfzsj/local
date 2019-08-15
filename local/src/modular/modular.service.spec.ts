import { Test, TestingModule } from '@nestjs/testing';
import { ModularService } from './modular.service';

describe('ModularService', () => {
  let service: ModularService;
  
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ModularService],
    }).compile();
    service = module.get<ModularService>(ModularService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
