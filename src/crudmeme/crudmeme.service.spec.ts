import { Test, TestingModule } from '@nestjs/testing';
import { CrudmemeService } from './crudmeme.service';

describe('CrudmemeService', () => {
  let service: CrudmemeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CrudmemeService],
    }).compile();

    service = module.get<CrudmemeService>(CrudmemeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
