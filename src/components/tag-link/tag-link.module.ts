import { Module } from '@nestjs/common';
import { TagLinkController } from './tag-link.controller';
import { TagLinkService } from './tag-link.service';

@Module({
  controllers: [TagLinkController],
  providers: [TagLinkService],
  exports: [TagLinkService],
})
export class TagLinkModule {}
