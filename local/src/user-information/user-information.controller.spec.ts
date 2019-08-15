import { Test, TestingModule } from '@nestjs/testing';
import { UserInformationController } from './user-information.controller';

describe('UserInformation Controller', () => {
  let module: TestingModule;
  
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [UserInformationController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: UserInformationController = module.get<UserInformationController>(UserInformationController);
    expect(controller).toBeDefined();
  });
});
