import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'El nombre tiene que ser cadena de texto' })
  @MaxLength(50, { message: 'El largo del nombre debe ser de 50 caracteres' })
  @IsNotEmpty()
  name: string;

  @IsString({ message: 'El apellido tiene que ser cadena de texto' })
  @MaxLength(50, { message: 'El largo del apellido debe ser de 50 caracteres' })
  @IsNotEmpty()
  lastname: string;

  @IsString({ message: 'El correo tiene que ser cadena de texto' })
  @MaxLength(100, { message: 'El largo del correo debe ser de 100 caracteres' })
  @IsNotEmpty()
  @IsEmail({}, { message: 'El correo debe ser un correo valido.' })
  email: string;

  @IsString({ message: 'La contraseña tiene que ser cadena de texto' })
  @MaxLength(100, {
    message: 'El largo de la contraseña debe ser de 100 caracteres',
  })
  @MinLength(6, { message: 'La contraseña debe tener mas de 6 caracteres' })
  @IsNotEmpty()
  password: string;
}
