import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateListDto {
  @IsNumber()
  @IsOptional()
  total: number;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  user_id: string;

  @IsString()
  category_id: string;
}
