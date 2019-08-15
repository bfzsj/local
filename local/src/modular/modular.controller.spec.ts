import { Test, TestingModule } from '@nestjs/testing';
import { ModularController } from './modular.controller';

describe('Modular Controller', () => {
  let module: TestingModule;
  
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [ModularController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: ModularController = module.get<ModularController>(ModularController);
    expect(controller).toBeDefined();
  });
});
