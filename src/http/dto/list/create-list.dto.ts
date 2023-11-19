import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

// class ItemDto {
//   @IsString()
//   @IsNotEmpty()
//   description: string;

//   @IsNumber()
//   @IsOptional()
//   quantity?: number;

//   @IsDecimal()
//   @IsOptional()
//   price?: number;

//   @IsBoolean()
//   selected: boolean;
// }

export class CreateListDto {
  @IsNumber()
  total: number;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  user_id: string;
}
