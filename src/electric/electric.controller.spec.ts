import { Test, TestingModule } from '@nestjs/testing';
import { ElectricController } from './electric.controller.js';
import { ElectricService } from './electric.service.js';

describe('ElectricController', () => {
  let controller: ElectricController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ElectricController],
      providers: [ElectricService],
    }).compile();

    controller = module.get<ElectricController>(ElectricController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
