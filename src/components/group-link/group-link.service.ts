import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../../entities';
import { GroupLinkEntity } from './../../entities/group-link.entity';
import { CreateGroupLinkDto } from './dto/create-group-link.dto';
import { UpdateGroupLinkDto } from './dto/update-group-link.dto';

@Injectable()
export class GroupLinkService {
  constructor(
    @InjectRepository(GroupLinkEntity)
    private readonly groupLinkRepository: Repository<GroupLinkEntity>,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async create(createGroupLinkDto: CreateGroupLinkDto) {
    const { title, description = '', uuidUser } = createGroupLinkDto;
    const groupLink = await this.groupLinkRepository.findOne({
      where: { title },
    });

    if (groupLink) {
      throw new BadRequestException(`Tiulo {${title}} ya existe`);
    }

    const user = await this.userRepository.findOne({
      where: { uuid: uuidUser },
    });

    if (!user) {
      throw new BadRequestException(`Usuario con id {${uuidUser}} no existe`);
    }

    const newGroupLink = this.groupLinkRepository.create({
      title,
      description,
      user,
    });

    const groupLinkCreated = await this.groupLinkRepository.save(newGroupLink);

    return {
      id: groupLinkCreated.id,
      uuid: groupLinkCreated.uuid,
      title: groupLinkCreated.title,
      description: groupLinkCreated.description,
      uuidUser: groupLinkCreated.user.uuid,
    };
  }

  findAll() {
    return this.groupLinkRepository.find();
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
