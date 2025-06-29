import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GroupLinkService } from './group-link.service';
import { CreateGroupLinkDto } from './dto/create-group-link.dto';
import { UpdateGroupLinkDto } from './dto/update-group-link.dto';

@Controller('group-link')
export class GroupLinkController {
  constructor(private readonly groupLinkService: GroupLinkService) {}

  @Post()
  create(@Body() createGroupLinkDto: CreateGroupLinkDto) {
    return this.groupLinkService.create(createGroupLinkDto);
  }

  @Get()
  findAll() {
    return this.groupLinkService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.groupLinkService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGroupLinkDto: UpdateGroupLinkDto) {
    return this.groupLinkService.update(+id, updateGroupLinkDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.groupLinkService.remove(+id);
  }
}
