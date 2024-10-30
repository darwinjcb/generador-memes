import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CrudmemeService } from './crudmeme.service';
import { CreateCrudmemeDto } from './dto/create-crudmeme.dto';
import { UpdateCrudmemeDto } from './dto/update-crudmeme.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('crudmeme')
@ApiTags('crudmeme')
export class CrudmemeController {
  constructor(private readonly crudmemeService: CrudmemeService) { }

  @Post()
  create(@Body() createCrudmemeDto: CreateCrudmemeDto) {
    return this.crudmemeService.create(createCrudmemeDto);
  }

  @Get()
  findAll() {
    return this.crudmemeService.encontrarEstenTendencia();
  }
  @Get('olvidado')
  encontrarEstenOlvidados() {
    return this.crudmemeService.encontrarEstenOlvidados();
  }
  @Get(':id') 
  findOne(@Param('id') id: string) {
    return this.crudmemeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCrudmemeDto: UpdateCrudmemeDto) {
    return this.crudmemeService.update(+id, updateCrudmemeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.crudmemeService.remove(+id);
  }
}
