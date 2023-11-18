import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  created_at: string;

  @IsString()
  @IsOptional()
  updated_at?: string;
}
