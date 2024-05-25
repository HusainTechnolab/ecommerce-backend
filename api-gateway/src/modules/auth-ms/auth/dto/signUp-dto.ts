import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class SignUpDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: 'string' })
  firstName: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: 'string' })
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  @IsString()
  @ApiProperty({ type: 'string' })
  email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: 'string' })
  password: string;

  @IsOptional()
  @ApiProperty({ type: 'string', format: 'binary', required: true })
  profile: any;
}
