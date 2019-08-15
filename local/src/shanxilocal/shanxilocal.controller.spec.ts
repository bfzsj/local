import { Test, TestingModule } from '@nestjs/testing';
import { ShanxilocalController } from './shanxilocal.controller';

describe('Shanxilocal Controller', () => {
  let module: TestingModule;
  
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [ShanxilocalController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: ShanxilocalController = module.get<ShanxilocalController>(ShanxilocalController);
    expect(controller).toBeDefined();
  });
});
