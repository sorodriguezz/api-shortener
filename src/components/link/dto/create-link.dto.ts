import { IsInt, IsOptional, IsString, Max } from 'class-validator';

export class CreateLinkDto {
  @IsString({ message: 'El titulo debe ser una cadena de texto' })
  @Max(50, { message: 'El titulo no puede exceder los 50 caracteres' })
  title: string;

  @IsString({ message: 'La descripcion debe ser una cadena de texto' })
  @IsOptional()
  @Max(200, { message: 'La descripcion no puede exceder los 200 caracteres' })
  description?: string;

  @IsString({ message: 'La URL debe ser una cadena de texto' })
  @Max(500, { message: 'La URL no puede exceder los 500 caracteres' })
  url: string;

  @IsString({ message: 'La imagen debe ser una cadena de texto' })
  @Max(255, { message: 'La imagen no puede exceder los 255 caracteres' })
  @IsOptional()
  image?: string;

  @IsInt({ message: 'El ID del grupo debe ser un número entero' })
  groupLinkId: number;
}
