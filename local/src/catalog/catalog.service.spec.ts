import { Test, TestingModule } from '@nestjs/testing';
import { CatalogService } from './catalog.service';

describe('CatalogService', () => {
  let service: CatalogService;
  
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatalogService],
    }).compile();
    service = module.get<CatalogService>(CatalogService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
