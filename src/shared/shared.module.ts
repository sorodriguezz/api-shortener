import {
  GroupLinkEntity,
  LinkEntity,
  PermissionEntity,
  RoleEntity,
  TagLinkEntity,
  UserEntity,
} from '../entities';
import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([
      TagLinkEntity,
      PermissionEntity,
      RoleEntity,
      UserEntity,
      GroupLinkEntity,
      LinkEntity,
    ]),
  ],
  exports: [TypeOrmModule],
})
export class SharedModule {}
