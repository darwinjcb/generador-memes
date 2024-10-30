import { Injectable } from '@nestjs/common';
import { CreateCrudmemeDto } from './dto/create-crudmeme.dto';
import { UpdateCrudmemeDto } from './dto/update-crudmeme.dto';
import { ServicioprismaService } from 'src/servicioprisma/servicioprisma.service';

@Injectable()
export class CrudmemeService {
  constructor(private constructorPrisma: ServicioprismaService) { }
  create(createCrudmemeDto: CreateCrudmemeDto) {
    return this.constructorPrisma.meme.create({
      data: createCrudmemeDto,
    });
  }
  // Las que esten en tendencia
  encontrarEstenTendencia() {
    return this.constructorPrisma.meme.findMany({
      where: { isTrending: true },
    });
  }

  encontrarEstenOlvidados() {
    return this.constructorPrisma.meme.findMany({
      where: { isTrending: false },
    });
  }


  findOne(id: number) {
    return this.constructorPrisma.meme.findUnique({
      where: { id },
    });
  }

  update(id: number, updateCrudmemeDto: UpdateCrudmemeDto) {
    return this.constructorPrisma.meme.update({
      where: { id },
      data: updateCrudmemeDto,
    });
  }
  remove(id: number) {
    return this.constructorPrisma.meme.delete({
      where: { id },
    });
  }
}
