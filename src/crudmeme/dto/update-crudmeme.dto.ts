import { PartialType } from '@nestjs/mapped-types';
import { CreateCrudmemeDto } from './create-crudmeme.dto';

export class UpdateCrudmemeDto extends PartialType(CreateCrudmemeDto) {}
