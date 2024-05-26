import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsBoolean,  IsOptional } from 'class-validator';
import { CreateCategoryDto } from './create-category-dto';

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {
    @IsOptional()
    @ApiProperty({type:'boolean',example:true})
    isActive: boolean;
}
