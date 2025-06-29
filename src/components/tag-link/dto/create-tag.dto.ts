import { IsString, Max } from 'class-validator';

export class CreateTagDto {
  @IsString({ message: 'Titulo debe ser una cadena de texto' })
  @Max(50, { message: 'Titulo no puede exceder los 50 caracteres' })
  title: string;

  @IsString({ message: 'Color debe ser una cadena de texto' })
  @Max(50, { message: 'Color no puede exceder los 50 caracteres' })
  color: string;
}
