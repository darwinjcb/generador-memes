import { Test, TestingModule } from '@nestjs/testing';
import { CrudmemeController } from './crudmeme.controller';
import { CrudmemeService } from './crudmeme.service';

describe('CrudmemeController', () => {
  let controller: CrudmemeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CrudmemeController],
      providers: [CrudmemeService],
    }).compile();

    controller = module.get<CrudmemeController>(CrudmemeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
