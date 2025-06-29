import { Module } from '@nestjs/common';
import { LinkService } from './link.service';
import { LinkController } from './link.controller';
import { GroupLinkModule } from '../group-link/group-link.module';

@Module({
  controllers: [LinkController],
  providers: [LinkService],
  imports: [GroupLinkModule],
})
export class LinkModule {}
