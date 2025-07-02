import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  MaxLength,
} from 'class-validator';

export class CreateGroupLinkDto {
  @IsString({ message: 'Titulo debe ser una cadena de texto' })
  @MaxLength(50, {
    message: 'Titulo no puede exceder los 50 caracteres',
  })
  @IsNotEmpty({ message: 'Titulo es requerido' })
  title: string;

  @IsString({ message: 'Descripcion debe ser una cadena de texto' })
  @MaxLength(255, {
    message: 'Descripcion no puede exceder los 255 caracteres',
  })
  @IsOptional()
  description?: string;

  @IsNotEmpty({ message: 'Uuid de usuario es requerido' })
  @IsUUID('all', { message: 'UuId de usuario debe ser un UUID valido' })
  uuidUser: string;
}
