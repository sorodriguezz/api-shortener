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
    private readonly tagRepository: Repository<TagLinkEntity>,
  ) {}

  create(createTagDto: CreateTagDto) {
    const { title, color } = createTagDto;
    const tag = this.tagRepository.create({ title, color });
    return this.tagRepository.save(tag);
  }

  findAll() {
    return this.tagRepository.find();
  }

  findOne(id: number) {
    return this.tagRepository.findOneBy({ id });
  }

  update(id: number, updateTagDto: UpdateTagDto) {
    return this.tagRepository.update(id, updateTagDto);
  }

  remove(id: number) {
    return this.tagRepository.delete(id);
  }
}
