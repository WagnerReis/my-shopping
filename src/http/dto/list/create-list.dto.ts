import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateListDto {
  @IsNumber()
  total: number;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  user_id: string;

  @IsString()
  category_id: string;
}
