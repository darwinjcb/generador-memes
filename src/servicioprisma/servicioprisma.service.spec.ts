import { Test, TestingModule } from '@nestjs/testing';
import { ServicioprismaService } from './servicioprisma.service';

describe('ServicioprismaService', () => {
  let service: ServicioprismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServicioprismaService],
    }).compile();

    service = module.get<ServicioprismaService>(ServicioprismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
