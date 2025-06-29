import { Module } from '@nestjs/common';
import { GroupLinkService } from './group-link.service';
import { GroupLinkController } from './group-link.controller';

@Module({
  controllers: [GroupLinkController],
  providers: [GroupLinkService],
  exports: [GroupLinkService],
})
export class GroupLinkModule {}
