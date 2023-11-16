import { IsDate, IsEmail, IsString, IsStrongPassword } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsStrongPassword()
  password: string;

  @IsDate()
  created_at?: Date;

  @IsDate()
  updated_at?: Date;
}
