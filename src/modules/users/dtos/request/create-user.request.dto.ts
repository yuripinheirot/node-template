import { IsEmail, IsNotEmpty } from 'class-validator'

export class CreateUserRequestDto {
  @IsEmail()
  @IsNotEmpty()
  username: string

  @IsNotEmpty()
  password: string
}
