import { Test, TestingModule } from '@nestjs/testing';
import { AdvertisingController } from './advertising.controller';

describe('Advertising Controller', () => {
  let module: TestingModule;
  
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [AdvertisingController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: AdvertisingController = module.get<AdvertisingController>(AdvertisingController);
    expect(controller).toBeDefined();
  });
});
