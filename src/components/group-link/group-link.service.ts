import { GroupLinkEntity } from './../../entities/group-link.entity';
import { Injectable } from '@nestjs/common';
import { CreateGroupLinkDto } from './dto/create-group-link.dto';
import { UpdateGroupLinkDto } from './dto/update-group-link.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class GroupLinkService {
  constructor(
    @InjectRepository(GroupLinkEntity)
    private readonly groupLinkRepository: Repository<GroupLinkEntity>,
  ) {}

  create(createGroupLinkDto: CreateGroupLinkDto) {
    return 'This action adds a new groupLink';
  }

  findAll() {
    return `This action returns all groupLink`;
  }

  findOne(id: number) {
    return `This action returns a #${id} groupLink`;
  }

  update(id: number, updateGroupLinkDto: UpdateGroupLinkDto) {
    return `This action updates a #${id} groupLink`;
  }

  remove(id: number) {
    return `This action removes a #${id} groupLink`;
  }
}
