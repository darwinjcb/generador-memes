import { Module } from '@nestjs/common';
import { ServicioprismaService } from 'src/servicioprisma/servicioprisma.service';

@Module({
    providers:[ServicioprismaService],
    exports:[ServicioprismaService]


})
export class ModuloprismaModule {}
