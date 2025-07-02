import { Module } from '@nestjs/common';
import { GroupLinkController } from './group-link.controller';
import { GroupLinkService } from './group-link.service';

@Module({
  controllers: [GroupLinkController],
  providers: [GroupLinkService],
  exports: [GroupLinkService],
})
export class GroupLinkModule {}
