import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class SignInDto {
  @IsNotEmpty()
  @IsEmail()
  @IsString()
  @ApiProperty({ type: 'string' })
  email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: 'string' })
  password: string;
}
