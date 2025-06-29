import { TagLinkEntity } from '../../entities/tag-link.entity';
import { Injectable } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TagLinkService {
  constructor(
    @InjectRepository(TagLinkEntity)
    private readonly tagLinkRepository: Repository<TagLinkEntity>,
  ) {}

  create(createTagDto: CreateTagDto) {
    const { title, color } = createTagDto;
    const tag = this.tagLinkRepository.create({ title, color });
    return this.tagLinkRepository.save(tag);
  }

  findAll() {
    return this.tagLinkRepository.find();
  }

  findOne(id: number) {
    return this.tagLinkRepository.findOneBy({ id });
  }

  update(id: number, updateTagDto: UpdateTagDto) {
    return this.tagLinkRepository.update(id, updateTagDto);
  }

  remove(id: number) {
    return this.tagLinkRepository.delete(id);
  }
}
