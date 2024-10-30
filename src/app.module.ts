import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrudmemeModule } from './crudmeme/crudmeme.module';
import { ModuloprismaModule } from './moduloprisma/moduloprisma.module';
import { ServicioprismaService } from './servicioprisma/servicioprisma.service';

@Module({
  imports: [CrudmemeModule, ModuloprismaModule],
  controllers: [AppController],
  providers: [AppService, ServicioprismaService],
})
export class AppModule {}
