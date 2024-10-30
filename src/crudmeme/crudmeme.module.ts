import { Module } from '@nestjs/common';
import { CrudmemeService } from './crudmeme.service';
import { CrudmemeController } from './crudmeme.controller';
import { ModuloprismaModule } from 'src/moduloprisma/moduloprisma.module';

@Module({
  controllers: [CrudmemeController],
  providers: [CrudmemeService],
  imports: [ModuloprismaModule]
})
export class CrudmemeModule {}
