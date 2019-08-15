import { Test, TestingModule } from '@nestjs/testing';
import { ShanxilocalService } from './shanxilocal.service';

describe('ShanxilocalService', () => {
  let service: ShanxilocalService;
  
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShanxilocalService],
    }).compile();
    service = module.get<ShanxilocalService>(ShanxilocalService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
