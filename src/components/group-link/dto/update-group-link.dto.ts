import { PartialType } from '@nestjs/mapped-types';
import { CreateGroupLinkDto } from './create-group-link.dto';

export class UpdateGroupLinkDto extends PartialType(CreateGroupLinkDto) {}
