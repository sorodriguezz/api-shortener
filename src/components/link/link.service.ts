import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLinkDto } from './dto/create-link.dto';
import { UpdateLinkDto } from './dto/update-link.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { LinkEntity } from '../../entities';
import { Repository } from 'typeorm';
import { GroupLinkService } from '../group-link/group-link.service';

@Injectable()
export class LinkService {
  constructor(
    @InjectRepository(LinkEntity)
    private readonly linkRepository: Repository<LinkEntity>,
    private readonly groupLinkService: GroupLinkService,
  ) {}

  async create(createLinkDto: CreateLinkDto) {
    const { title, description, url, image, groupLinkId } = createLinkDto;

    // const groupLink = await this.groupLinkService.findOne(groupLinkId);

    // if (!groupLink) {
    //   throw new NotFoundException(
    //     `No existe grupo de links con id ${groupLinkId}`,
    //   );
    // }

    // const link = this.linkRepository.create({
    //   title,
    //   description,
    //   url,
    //   image,
    //   groupLink,
    // });
    // return this.linkRepository.save(link);
  }

  findAll() {
    return `This action returns all link`;
  }

  findOne(id: number) {
    return `This action returns a #${id} link`;
  }

  update(id: number, updateLinkDto: UpdateLinkDto) {
    return `This action updates a #${id} link`;
  }

  remove(id: number) {
    return `This action removes a #${id} link`;
  }
}
